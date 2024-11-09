import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/packages/ark',

  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],

  test: {
    cache: {
      dir: '../../node_modules/.vitest',
    },
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/ark',
      provider: 'v8',
    },
  },
});
