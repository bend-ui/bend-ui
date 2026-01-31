/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react',

  plugins: [react(), tsconfigPaths()],

  test: {
    cacheDir: '../../node_modules/.vitest/packages/react',
    globals: true,
    environment: 'jsdom',
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/react',
      provider: 'v8',
    },
    // browser: {
    //   name: 'react-chromium',
    //   provider: playwright(),
    //   enabled: true,
    //   headless: true,
    // },
  },
});
