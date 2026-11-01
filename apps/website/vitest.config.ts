import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    conditions: ['import', 'module', 'browser', 'default'],
    alias: [
      {
        find: /^@bend-ui\/styled-system\/(.*)$/,
        replacement: path.resolve(__dirname, 'styled-system/$1'),
      },
    ],
  },
  test: {
    name: 'website',
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.{spec,test}.{ts,tsx}'],
  },
});
