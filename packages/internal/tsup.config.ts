import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  dts: true,
  clean: true,
  treeshake: true,
  tsconfig: 'tsconfig.lib.json',
  external: ['react', 'react-dom', '@bend-ui/styled-system'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxImportSource = 'react';
  },
  banner: {
    js: '"use client";',
  },
});
