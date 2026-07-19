/// <reference types='vitest/config' />
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vite-ark-ui',
  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        './node_modules/@fontsource-variable/inter',
      ],
    },
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react({}), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  resolve: {
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
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/vite-ark-ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/vite-ark-ui',
      provider: 'v8',
    },
  },
});
