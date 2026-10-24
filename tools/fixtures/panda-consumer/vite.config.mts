import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxReadySignal } from '@nx/vite/plugins/nx-ready-signal.plugin';

export default defineConfig({
  plugins: [react(), nxReadySignal()],
  ssr: { noExternal: [/^@bend-ui\//] },
});
