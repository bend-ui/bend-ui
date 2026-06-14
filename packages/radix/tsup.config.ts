import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  dts: true,
  clean: true,
  treeshake: true,
  external: ['react', 'react-dom', 'radix-ui', 'lucide-react', '@bend-ui/react', '@bend-ui/styled-system'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxImportSource = 'react';
  },
  swc: {
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
          importSource: 'react',
        },
      },
    },
  },
  banner: {
    js: '"use client";',
  },
});
