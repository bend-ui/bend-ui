/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/ark-ui',

  plugins: [react()],

  resolve: {
    tsconfigPaths: true,
  },

  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/ark-ui',
      provider: 'v8',
    },
    // browser: {
    //   name: 'ark-chromium',
    //   provider: playwright(),
    //   enabled: true,
    //   headless: true,
    // },
  },
});
