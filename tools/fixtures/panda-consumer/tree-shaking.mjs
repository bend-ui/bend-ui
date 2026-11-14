import assert from 'node:assert/strict';
import { writeFileSync, rmSync } from 'node:fs';
import { build } from 'vite';

// Each input is built separately, so a second entry cannot keep its exports alive.
async function measure(specifier, names, label) {
  const entry = `tree-${label}.mjs`;
  writeFileSync(
    entry,
    `import { ${names.join(', ')} } from '${specifier}';\nconsole.log(${names.join(', ')});\n`,
  );
  try {
    const result = await build({
      configFile: false,
      logLevel: 'silent',
      build: { write: false, minify: false, rollupOptions: { input: entry } },
    });
    const chunks = result.output.filter((item) => item.type === 'chunk');
    const modules = Object.fromEntries(
      chunks.flatMap((chunk) => Object.entries(chunk.modules)),
    );
    const find = (suffix) =>
      Object.entries(modules).find(([id]) => id.endsWith(suffix))?.[1];
    const root = find('/@bend-ui/base-ui/dist/index.js');
    const recipe = find(
      '/@bend-ui/base-ui/styled-system/recipes/select-dropdown.js',
    );
    const code = chunks.map((chunk) => chunk.code).join('\n');
    return {
      bytes: Buffer.byteLength(code),
      rootLength: root?.renderedLength,
      rootExports: root?.renderedExports,
      selectRecipeLength: recipe?.renderedLength ?? 0,
      hasSelectRecipeMarker: code.includes('SelectDropdown'),
    };
  } finally {
    rmSync(entry, { force: true });
  }
}
const rootButton = await measure('@bend-ui/base-ui', ['Button'], 'root-button');
const rootBoth = await measure(
  '@bend-ui/base-ui',
  ['Button', 'Select'],
  'root-both',
);
assert.ok(rootButton.rootExports.includes('Button'));
assert.ok(rootBoth.rootExports.includes('Select'));
const recipeButton = await measure(
  '@bend-ui/base-ui/recipes',
  ['button'],
  'recipe-button',
);
const recipeBoth = await measure(
  '@bend-ui/base-ui/recipes',
  ['button', 'selectDropdown'],
  'recipe-both',
);
assert.equal(recipeButton.selectRecipeLength, 0);
assert.equal(recipeButton.hasSelectRecipeMarker, false);
assert.ok(recipeBoth.selectRecipeLength > 0);
assert.equal(recipeBoth.hasSelectRecipeMarker, true);
console.log(
  JSON.stringify({ rootButton, rootBoth, recipeButton, recipeBoth }, null, 2),
);
console.log(
  'PASS: Vite/Rolldown removes unused generated SelectDropdown recipe',
);
