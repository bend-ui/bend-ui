import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  external: [
    'react',
    'react-dom',
    '@bend-ui/theme',
    '@bend-ui/styled-system',
    '@bend-ui/primitives',
    'ariakit',
  ],
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
