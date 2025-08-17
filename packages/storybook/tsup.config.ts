import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  external: ['storybook', '@storybook/*', '@particles/theme'],
  platform: 'browser',
  format: ['cjs', 'esm'],
  target: 'es2020',
  skipNodeModulesBundle: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  keepNames: true,
  dts: false,
  treeshake: true,
  bundle: true,
  outDir: 'dist',
});
