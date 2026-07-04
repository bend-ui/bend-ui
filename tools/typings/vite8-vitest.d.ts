// Vitest 4 declares its `test` property on the `vite` copy it depends on
// (vite 7), which is a different package instance than the workspace's vite 8.
// Re-declare the augmentation here so `test` resolves on vite 8's UserConfig.
import type { ViteUserConfig } from 'vitest/config';

declare module 'vite' {
  interface UserConfig {
    test?: ViteUserConfig['test'];
  }
}
