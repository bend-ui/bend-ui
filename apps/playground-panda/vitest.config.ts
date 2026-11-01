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
    name: 'playground-panda',
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./specs/setup.ts'],
    include: ['specs/**/*.{spec,test}.{ts,tsx}'],
  },
});
