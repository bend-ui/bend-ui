/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { cache } from 'react';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/packages/radix',

  plugins: [react(), tsconfigPaths()],

  test: {
    cacheDir: '../../node_modules/.vitest/packages/radix',
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/radix',
      provider: 'v8',
    },
  },
});
