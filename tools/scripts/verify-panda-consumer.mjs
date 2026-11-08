import assert from 'node:assert/strict';
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
    process.env.BEND_VERIFY_SURFACES === '1'
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
  const npmMode = process.env.BEND_VERIFY_NPM === '1';
  if (npmMode) {
    // Direct tarball dependencies let npm's $ references override the rewritten
    // workspace ranges without resolving any Bend package from a registry.
    Object.assign(manifest.dependencies, overrides);
    manifest.overrides = Object.fromEntries(
      Object.keys(overrides).map((name) => [name, `$${name}`]),
    );
    delete manifest.packageManager;
  } else {
    manifest.pnpm = { overrides };
  }
  writeFileSync(
    path.join(app, 'package.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  console.log(
    npmMode
      ? run('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund'])
      : run('pnpm', [
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
  if (npmMode) {
    for (const name of Object.keys(overrides)) {
      const location = realpathSync(path.join(app, 'node_modules', name));
      assert.ok(
        location.startsWith(app + path.sep),
        `${name} escaped the consumer`,
      );
      assert.ok(
        !existsSync(path.join(location, 'src')),
        `${name} has source fallback`,
      );
    }
    console.log(run('npm', ['ls', '--all']));
    console.log(
      run('node', [
        '--input-type=module',
        '-e',
        `
      import assert from 'node:assert/strict';
      import { Button, Select } from '@bend-ui/base-ui';
      import { css } from '@bend-ui/base-ui/css';
      import { button } from '@bend-ui/base-ui/recipes';
      assert.ok(Button && Select && typeof css === 'function' && typeof button === 'function');
      console.log('PASS: installed ESM root and helper exports');
    `,
      ]),
    );
    console.log(
      run('node', [
        '-e',
        `
      const assert = require('node:assert/strict');
      const { Button, Select } = require('@bend-ui/base-ui');
      assert.ok(Button && Select);
      console.log('PASS: installed CommonJS root export');
    `,
      ]),
    );
  }
  const config = readFileSync(path.join(app, 'panda.config.ts'), 'utf8');
  assert.ok(
    config.includes("include: ['./src/**/*.{ts,tsx}']"),
    'Only app source should be scanned',
  );
  exec(['panda', 'codegen']);
  exec(['panda', 'cssgen', '--outfile', 'styled-system/styles.css']);
  exec(['tsc', '--project', 'tsconfig.json']);
  exec(['vite', 'build']);
  if (npmMode) console.log(run('node', ['tree-shaking.mjs']));
  const css = readFileSync(path.join(app, 'styled-system/styles.css'), 'utf8');
  assert.match(
    css,
    /@layer\s+reset\s*,\s*base\s*,\s*tokens\s*,\s*recipes\s*,\s*utilities\s*;/,
  );
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
  if (!npmMode) console.log(`Inspect or serve the app at ${app}`);
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
    assert.ok(contract.buttonVariants.variant.includes('editorial'));
    assert.ok(contract.buttonVariants.size.includes('jumbo'));
    assert.ok(contract.textVariants.variant.includes('billboard'));
    assert.ok(!contract.publishedVariants.variant.includes('editorial'));
    assert.ok(!contract.publishedVariants.size.includes('jumbo'));
    assert.match(contract.published, /Button__root--variant_primary/);
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
    console.log(
      `PASS: native recipe ${mode}, compound runtime, slots and published/generated type boundary.`,
    );
  }
  if (npmMode && process.env.BEND_KEEP_CONSUMER !== '1') {
    rmSync(work, { recursive: true, force: true });
    console.log('Removed successful temporary npm consumer.');
  }
} catch (error) {
  if (error.stdout) console.error(error.stdout.toString());
  if (error.stderr) console.error(error.stderr.toString());
  console.error(`Consumer preserved for diagnosis: ${app}`);
  throw error;
}
