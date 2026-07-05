import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/factory.ts'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  dts: true,
  clean: true,
  treeshake: true,
  tsconfig: 'tsconfig.lib.json',
  external: [
    'react',
    'react-dom',
    'lucide-react',
    '@floating-ui/react',
    '@bend-ui/primitives',
    '@bend-ui/styled-system',
  ],
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
