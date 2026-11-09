import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const fixture = path.join(root, 'tools/fixtures/panda-consumer');
const work = realpathSync(
  mkdtempSync(path.join(tmpdir(), 'bend-panda-consumer-')),
);
const app = path.join(work, 'app');
const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));
function run(command, args, cwd = app) {
  console.log(`\n${command} ${args.join(' ')}`);
  const pinnedPnpm = command === 'pnpm' && process.env.BEND_PNPM_CLI;
  const result = spawnSync(
    pinnedPnpm ? process.execPath : command,
    pinnedPnpm ? [pinnedPnpm, ...args] : args,
    {
      cwd,
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
      timeout: 180_000,
    },
  );
  const output = `${result.stdout ?? ''}${result.stderr ?? ''}`;
  if (result.error) throw result.error;
  assert.equal(result.status, 0, output);
  return output;
}
function exec(args) {
  const output = run('pnpm', ['exec', ...args]);
  assert.doesNotMatch(
    output,
    /design_system_buildinfo_stale|design_system_files_not_publishable/,
  );
  console.log(output);
  return output;
}

// Serve the actual packed-consumer build, so matching classnames alone cannot
// hide missing extraction or a cascade regression in the replacement styles.
async function verifyPackedButtons(mode) {
  const { chromium } = await import('playwright');
  const folder = path.join(app, `dist-${mode}`);
  const server = createServer((request, response) => {
    try {
      const pathname = new URL(request.url, 'http://localhost').pathname;
      const file = path.join(
        folder,
        pathname === '/' ? 'index.html' : pathname,
      );
      response.setHeader(
        'Content-Type',
        { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html' }[
          path.extname(file)
        ] ?? 'application/octet-stream',
      );
      response.end(readFileSync(file));
    } catch {
      response.statusCode = 404;
      response.end();
    }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`http://127.0.0.1:${server.address().port}`);
    for (const name of ['published-button', 'published-icon']) {
      await page.getByTestId(name).waitFor();
      const style = await page.getByTestId(name).evaluate((el) => {
        const s = getComputedStyle(el);
        return {
          background: s.backgroundColor,
          radius: s.borderRadius,
          label: getComputedStyle(el.querySelector('.Button__label'))
            .textDecorationLine,
        };
      });
      assert.equal(
        style.background,
        mode === 'extend' ? 'rgb(190, 18, 60)' : 'rgb(30, 64, 175)',
      );
      if (mode === 'replace') {
        assert.equal(style.radius, '3px');
        assert.equal(style.label, 'underline');
      }
    }
    assert.deepEqual(errors, []);
    console.log(
      `PASS: packed Button/IconButton computed ${mode} styles, no React-source changes.`,
    );
  } finally {
    await browser?.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

console.log(`Isolated packed consumer: ${app}`);
try {
  cpSync(fixture, app, {
    recursive: true,
    filter: (source) =>
      !['node_modules', 'dist', 'styled-system'].includes(
        path.basename(source),
      ),
  });
  const packages = new Map(
    readdirSync(path.join(root, 'packages')).flatMap((dir) => {
      const folder = path.join(root, 'packages', dir);
      const file = path.join(folder, 'package.json');
      return existsSync(file) ? [[readJson(file).name, folder]] : [];
    }),
  );
  const overrides = {};
  function pack(name) {
    if (overrides[name]) return;
    const folder = packages.get(name);
    assert.ok(folder, `Missing workspace dependency ${name}`);
    const manifest = readJson(path.join(folder, 'package.json'));
    const tarball = path.join(
      work,
      `${name.replace('@', '').replaceAll('/', '-')}.tgz`,
    );
    overrides[name] = `file:${tarball}`;
    for (const [dependency, range] of Object.entries(
      manifest.dependencies ?? {},
    )) {
      if (range.startsWith('workspace:')) pack(dependency);
    }
    run('pnpm', ['pack', '--out', tarball, '--json'], folder);
    console.log(`Packed ${name}`);
    const entries = run('tar', ['-tzf', tarball], work).split('\n');
    assert.ok(
      !entries.some((entry) => entry.startsWith('package/src/')),
      `${name} must be built-only`,
    );
    if (name === '@bend-ui/base-ui') {
      for (const file of [
        'dist/panda/lib.json',
        'dist/panda/preset.mjs',
        'dist/panda/buildinfo.json',
        'styled-system/css/index.js',
      ]) {
        assert.ok(
          entries.includes(`package/${file}`),
          `Tarball missing ${file}. Matching entries:\n${
            entries
              .filter((entry) =>
                /^package\/(styled-system|dist\/panda)\//.test(entry),
              )
              .slice(0, 50)
              .join('\n') || '(none)'
          }`,
        );
      }
    }
  }
  pack('@bend-ui/base-ui');
  const manifest = readJson(path.join(app, 'package.json'));
  manifest.packageManager = readJson(
    path.join(root, 'package.json'),
  ).packageManager;
  manifest.dependencies = { '@bend-ui/base-ui': overrides['@bend-ui/base-ui'] };
  if (
    process.env.BEND_VERIFY_RAMPS === '1' ||
    process.env.BEND_VERIFY_TOKENS === '1' ||
    process.env.BEND_VERIFY_SURFACES === '1' ||
    process.env.BEND_VERIFY_COLLECTION === '1'
  ) {
    manifest.dependencies['@bend-ui/preset'] = overrides['@bend-ui/preset'];
  }
  manifest.devDependencies = {};
  for (const name of [
    '@pandacss/dev',
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
    '@types/node',
    'typescript',
    'vite',
    '@vitejs/plugin-react',
  ]) {
    manifest.devDependencies[name] = readJson(
      path.join(root, 'node_modules', name, 'package.json'),
    ).version;
  }
  manifest.pnpm = { overrides };
  writeFileSync(
    path.join(app, 'package.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  console.log(
    run('pnpm', [
      'install',
      '--ignore-workspace',
      '--ignore-scripts',
      '--no-frozen-lockfile',
      '--prefer-offline',
    ]),
  );
  const installed = realpathSync(
    path.join(app, 'node_modules/@bend-ui/base-ui'),
  );
  assert.ok(
    installed.startsWith(app + path.sep),
    'Package resolved outside the isolated consumer',
  );
  assert.ok(
    !existsSync(path.join(installed, 'src')),
    'Consumer must not have library source',
  );
  const config = readFileSync(path.join(app, 'panda.config.ts'), 'utf8');
  assert.ok(
    config.includes("include: ['./src/**/*.{ts,tsx}']"),
    'Only app source should be scanned',
  );
  exec(['panda', 'codegen']);
  exec(['panda', 'cssgen', '--outfile', 'styled-system/styles.css']);
  exec(['tsc', '--project', 'tsconfig.json']);
  exec(['vite', 'build']);
  const css = readFileSync(path.join(app, 'styled-system/styles.css'), 'utf8');
  assert.match(css, /--radii-md:\s*19px/);
  assert.match(css, /--colors-consumer:\s*#6d28d9/i);
  assert.match(css, /--colors-fill-primary:\s*var\(--colors-consumer\)/);
  assert.match(css, /\.Button__root/);
  assert.match(css, /border-radius:\s*var\(--radii-md\)/);
  assert.match(css, /background-color:\s*var\(--colors-fill-primary\)/);
  assert.ok(existsSync(path.join(app, 'dist/index.html')));
  console.log(
    '\nPASS: packed install, manifest hydration, consumer token overrides, generated types and production build.',
  );
  console.log(`Inspect or serve the app at ${app}`);
  if (process.env.BEND_VERIFY_TOKENS === '1') {
    const scenario = path.join(fixture, 'token-scenarios');
    cpSync(
      path.join(scenario, 'panda.tokens.config.ts'),
      path.join(app, 'panda.tokens.config.ts'),
    );
    cpSync(path.join(scenario, 'app.tsx'), path.join(app, 'src/app/app.tsx'));
    exec(['panda', 'codegen', '--config', 'panda.tokens.config.ts', '--clean']);
    exec([
      'panda',
      'cssgen',
      '--config',
      'panda.tokens.config.ts',
      '--outfile',
      'styled-system/styles.css',
    ]);
    exec(['tsc', '--project', 'tsconfig.json']);
    exec(['vite', 'build', '--outDir', 'dist-tokens']);
    const { verifyTokenConsumer } = await import('./verify-token-consumer.mjs');
    await verifyTokenConsumer(app);
  }
  if (process.env.BEND_VERIFY_RAMPS === '1') {
    const scenario = path.join(fixture, 'ramp-scenarios');
    cpSync(
      path.join(scenario, 'panda.ramps.config.ts'),
      path.join(app, 'panda.ramps.config.ts'),
    );
    cpSync(path.join(scenario, 'app.tsx'), path.join(app, 'src/app/app.tsx'));
    exec(['panda', 'codegen', '--config', 'panda.ramps.config.ts', '--clean']);
    exec([
      'panda',
      'cssgen',
      '--config',
      'panda.ramps.config.ts',
      '--outfile',
      'styled-system/styles.css',
    ]);
    exec(['tsc', '--project', 'tsconfig.json']);
    exec(['vite', 'build', '--outDir', 'dist-ramps']);
    const { verifyRampConsumer } = await import('./verify-ramp-consumer.mjs');
    await verifyRampConsumer(app);
  }
  if (process.env.BEND_VERIFY_SURFACES === '1') {
    const scenario = path.join(fixture, 'surface-scenarios');
    cpSync(
      path.join(scenario, 'panda.surfaces.config.ts'),
      path.join(app, 'panda.surfaces.config.ts'),
    );
    cpSync(path.join(scenario, 'app.tsx'), path.join(app, 'src/app/app.tsx'));
    exec([
      'panda',
      'codegen',
      '--config',
      'panda.surfaces.config.ts',
      '--clean',
    ]);
    exec([
      'panda',
      'cssgen',
      '--config',
      'panda.surfaces.config.ts',
      '--outfile',
      'styled-system/styles.css',
    ]);
    exec(['tsc', '--project', 'tsconfig.json']);
    exec(['vite', 'build', '--outDir', 'dist-surfaces']);
    const { verifySurfaceConsumer } =
      await import('./verify-surface-consumer.mjs');
    await verifySurfaceConsumer(app);
  }
  if (process.env.BEND_VERIFY_COLLECTION === '1') {
    const scenario = path.join(fixture, 'collection-scenarios');
    cpSync(
      path.join(scenario, 'panda.collection.config.ts'),
      path.join(app, 'panda.collection.config.ts'),
    );
    cpSync(path.join(scenario, 'app.tsx'), path.join(app, 'src/app/app.tsx'));
    cpSync(
      path.join(scenario, 'types.test.ts'),
      path.join(app, 'src/collection-types.test.ts'),
    );
    const source = readFileSync(path.join(app, 'src/app/app.tsx'), 'utf8');
    const styles = {};
    for (const collection of ['default', 'atelier']) {
      process.env.BEND_RECIPE_COLLECTION = collection;
      exec([
        'panda',
        'codegen',
        '--config',
        'panda.collection.config.ts',
        '--clean',
      ]);
      exec([
        'panda',
        'cssgen',
        '--config',
        'panda.collection.config.ts',
        '--outfile',
        'styled-system/styles.css',
      ]);
      exec(['tsc', '--project', 'tsconfig.json']);
      exec(['vite', 'build', '--outDir', `dist-collection-${collection}`]);
      assert.equal(
        readFileSync(path.join(app, 'src/app/app.tsx'), 'utf8'),
        source,
      );
      styles[collection] = readFileSync(
        path.join(app, 'styled-system/styles.css'),
        'utf8',
      );
      for (const name of [
        'Button',
        'Input',
        'Select',
        'SelectDropdown',
        'Card',
      ]) {
        assert.ok(
          styles[collection].includes(`.${name}__`),
          `missing ${name} CSS in ${collection}`,
        );
      }
    }
    delete process.env.BEND_RECIPE_COLLECTION;
    rmSync(path.join(app, 'src/collection-types.test.ts'));
    assert.notEqual(styles.default, styles.atelier);
    for (const selector of [
      'Button__root',
      'Input__root',
      'Select__control',
      'SelectDropdown__content',
      'Card__root',
    ]) {
      assert.match(
        styles.atelier,
        new RegExp(`\\.${selector}\\s*\\{[^}]*border-radius:\\s*2px`),
      );
    }
    assert.match(styles.atelier, /\.Card__root\s*\{[^}]*padding:\s*24px/);
    assert.match(
      styles.atelier,
      /\.Card__section\s*\{[^}]*margin-inline:\s*-24px/,
    );
    assert.match(styles.atelier, /letter-spacing:\s*0\.08em/);
    console.log(
      'PASS: same consumer source, generated types and built CSS for both collections.',
    );
  }
  for (const mode of ['extend', 'replace']) {
    console.log(`\nChecking native recipe ${mode}`);
    const scenario = path.join(fixture, 'recipe-scenarios');
    for (const [from, to] of [
      ['src/app/app.tsx', 'src/app/app.tsx'],
      ['src/recipe-button.tsx', 'src/recipe-button.tsx'],
      ['src/contract.tsx', 'src/contract.tsx'],
      ['src/types.test.ts', 'src/types.test.ts'],
      [`src/recipe-mode.${mode}.test.ts`, 'src/recipe-mode.test.ts'],
    ]) {
      cpSync(path.join(scenario, from), path.join(app, to));
    }
    const config = `panda.${mode}.config.ts`;
    exec(['panda', 'codegen', '--config', config, '--clean']);
    exec([
      'panda',
      'cssgen',
      '--config',
      config,
      '--outfile',
      'styled-system/styles.css',
    ]);
    exec(['tsc', '--project', 'tsconfig.json']);
    exec(['vite', 'build', '--outDir', `dist-${mode}`]);
    exec([
      'vite',
      'build',
      '--ssr',
      'src/contract.tsx',
      '--outDir',
      `dist-contract-${mode}`,
    ]);
    const { contract } = await import(
      pathToFileURL(path.join(app, `dist-contract-${mode}/contract.js`)).href
    );
    const styles = readFileSync(
      path.join(app, 'styled-system/styles.css'),
      'utf8',
    );
    assert.match(contract.select, /role="combobox"/);
    assert.match(contract.select, /Select__trigger--size_lg/);
    assert.match(contract.select, /Serif/);
    assert.equal(contract.selectDropdown.content, 'SelectDropdown__content');
    for (const slot of [
      'positioner',
      'content',
      'item',
      'itemText',
      'itemIndicator',
      'itemGroup',
      'itemGroupLabel',
    ]) {
      assert.equal(
        contract.publishedSelectDropdown[slot],
        contract.selectDropdown[slot],
      );
    }
    assert.match(
      styles,
      new RegExp(
        String.raw`\.SelectDropdown__content\s*\{[^}]*border-width:\s*${mode === 'extend' ? 7 : 3}px`,
      ),
    );
    if (mode === 'replace')
      assert.match(styles, /\.Select__trigger\s*\{[^}]*border-radius:\s*2px/);
    else
      assert.match(
        styles,
        /\.Select__trigger--size_lg\s*\{[^}]*border-radius:\s*11px/,
      );
    assert.ok(contract.buttonVariants.variant.includes('editorial'));
    assert.ok(contract.buttonVariants.size.includes('jumbo'));
    assert.ok(contract.textVariants.variant.includes('billboard'));
    assert.ok(!contract.publishedVariants.variant.includes('editorial'));
    assert.ok(!contract.publishedVariants.size.includes('jumbo'));
    assert.match(contract.published, /Button__root--variant_primary/);
    for (const slot of ['root', 'label', 'icon', 'spinner']) {
      for (const className of contract.publishedSlots[slot].split(' ')) {
        assert.ok(contract.consumerSlots[slot].split(' ').includes(className));
      }
    }
    assert.match(contract.publishedIcon, /Button__icon/);
    assert.match(contract.publishedIcon, /Button__label/);
    assert.match(contract.publishedIcon, /data-disabled=/);
    assert.match(contract.publishedIcon, / disabled=""/);
    assert.match(contract.publishedIcon, /aria-busy="true"/);
    assert.match(contract.publishedIcon, /data-loading=""/);
    assert.doesNotMatch(
      contract.publishedIcon,
      /isDisabled|isLoading|isdisabled|isloading/,
    );
    assert.match(contract.local, /Button__label/);
    assert.doesNotMatch(contract.local, / (?:variant|size)=/);
    const knownCompound = contract.knownCompound.root
      .split(' ')
      .find((value) => value.includes('--compound'));
    assert.ok(knownCompound);
    assert.ok(
      !contract.published.includes(knownCompound),
      'Packed components cannot emit newly generated compound classes',
    );
    assert.ok(styles.includes(`.${knownCompound}`));
    assert.match(contract.sibling, /Card__root/);
    assert.match(styles, /\.Card__root/);
    const compound = contract.compound.root
      .split(' ')
      .find((value) => value.includes('--compound'));
    assert.ok(compound, 'The consumer runtime must emit its compound class');
    assert.ok(
      !contract.plain.root.includes(compound),
      'Compound must require both variant values',
    );
    assert.ok(
      contract.local.includes(compound),
      'The local component must use the generated compound runtime',
    );
    assert.match(
      styles,
      new RegExp(
        String.raw`\.${compound}\s*\{[^}]*border-width:\s*${mode === 'extend' ? 5 : 9}px`,
      ),
    );
    assert.match(
      styles,
      new RegExp(
        String.raw`\.Button__root--variant_primary\s*\{[^}]*background-color:\s*${mode === 'extend' ? '#be123c' : '#1e40af'}`,
      ),
    );
    if (mode === 'extend') {
      assert.ok(contract.buttonVariants.variant.includes('danger'));
      assert.ok(contract.buttonVariants.size.includes('sm'));
      assert.ok(contract.textVariants.variant.includes('headline'));
      assert.match(styles, /outline-offset:\s*7px/);
    } else {
      assert.ok(!contract.buttonVariants.variant.includes('danger'));
      assert.ok(!contract.buttonVariants.size.includes('sm'));
      assert.ok(!contract.textVariants.variant.includes('headline'));
      assert.doesNotMatch(styles, /\.Button__root--variant_danger/);
      assert.doesNotMatch(styles, /\.Text--variant_headline/);
      assert.match(styles, /outline-offset:\s*13px/);
    }
    if (process.env.BEND_VERIFY_BUTTONS === '1')
      await verifyPackedButtons(mode);
    console.log(
      `PASS: native recipe ${mode}, compound runtime, slots and published/generated type boundary.`,
    );
  }
} catch (error) {
  if (error.stdout) console.error(error.stdout.toString());
  if (error.stderr) console.error(error.stderr.toString());
  console.error(`Consumer preserved for diagnosis: ${app}`);
  throw error;
}
