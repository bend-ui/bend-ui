import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'browser',
  format: ['cjs', 'esm'],
  target: 'es2020',
  skipNodeModulesBundle: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  keepNames: true,
  dts: true,
  treeshake: true,
  bundle: true,
  outDir: 'dist',
});
