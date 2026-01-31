/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import * as react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/base-ui',

  plugins: [react({}), tsconfigPaths()],

  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/base-ui',
      provider: 'v8',
    },
  },
});
