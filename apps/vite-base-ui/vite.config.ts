/// <reference types='vitest/config' />
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { nxReadySignal } from '@nx/vite/plugins/nx-ready-signal.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vite-base-ui',
  server: {
    port: 4200,
    host: 'localhost',
    hmr:
      process.env.NX_TASK_TARGET_CONFIGURATION === 'production'
        ? false
        : undefined,
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        './node_modules/@fontsource-variable/inter',
      ],
    },
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: path.resolve(__dirname, '*.md'), dest: '.' }],
      silent: true,
    }),
    nxReadySignal(),
  ],
  resolve: {
    tsconfigPaths: true,
    conditions: ['source', 'import', 'module', 'browser', 'default'],
    alias: [
      {
        find: /^@bend-ui\/styled-system\/(.*)$/,
        replacement: path.resolve(__dirname, 'styled-system/$1'),
      },
    ],
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: '../../dist/apps/vite-base-ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    name: 'vite-base-ui',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/vite-base-ui',
      provider: 'v8',
    },
  },
});
