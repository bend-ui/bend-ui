/// <reference types='vitest/config' />
import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/packages/react-aria',

  plugins: [
    react(),
    tsconfigPaths({
      projects: [path.resolve(__dirname, '../../tsconfig.base.json')],
    }),
  ],

  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/react-aria',
      provider: 'v8',
    },
  },
});
