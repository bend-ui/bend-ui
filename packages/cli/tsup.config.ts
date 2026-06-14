import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  tsconfig: 'tsconfig.lib.json',
  platform: 'node',
  format: ['cjs'],
  target: 'node16',
  skipNodeModulesBundle: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: true,
  keepNames: true,
  dts: true,
  treeshake: true,
  bundle: true,
  outDir: 'dist',
});
