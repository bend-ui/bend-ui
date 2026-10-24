/// <reference types='vitest/config' />
import { defineConfig } from 'vite';
import path from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/packages/preset',

  plugins: [
    tsconfigPaths({
      projects: [path.resolve(__dirname, '../../tsconfig.base.json')],
    }),
  ],

  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/preset',
      provider: 'v8',
    },
  },
});
