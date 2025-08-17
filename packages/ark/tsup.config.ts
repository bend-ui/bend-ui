import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  external: [
    'react',
    'react-dom',
    '@particles/theme',
    '@particles/styled-system',
    '@particles/primitives',
    '@ark-ui/react',
    '@particles/react',
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
