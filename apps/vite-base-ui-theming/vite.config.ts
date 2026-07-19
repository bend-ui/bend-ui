/// <reference types="vitest/config" />
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isLevel2 = mode === 'level2';
  const styledSystem = isLevel2 ? 'styled-system-level2' : 'styled-system';

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/vite-base-ui-theming',
    server: {
      port: 4201,
      host: 'localhost',
      fs: { allow: [searchForWorkspaceRoot(process.cwd())] },
    },
    preview: { port: 4201, host: 'localhost' },
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    define: {
      __CUSTOMIZATION_LEVEL__: JSON.stringify(isLevel2 ? 'Level 2' : 'Level 3'),
    },
    resolve: {
      conditions: ['source', 'import', 'module', 'browser', 'default'],
      alias: [
        {
          find: /^@bend-ui\/styled-system\/(.*)$/,
          replacement: path.resolve(__dirname, `${styledSystem}/$1`),
        },
      ],
    },
    build: {
      outDir: isLevel2
        ? '../../dist/apps/vite-base-ui-theming-level2'
        : '../../dist/apps/vite-base-ui-theming',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
    },
    test: {
      name: 'vite-base-ui-theming',
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/vite-base-ui-theming',
        provider: 'v8' as const,
      },
    },
  };
});
