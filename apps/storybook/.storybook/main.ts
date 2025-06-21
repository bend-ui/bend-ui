import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../src/**/*.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    getAbsolutePath('@vueless/storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        viteConfigPath: 'apps/storybook/vite.config.ts',
      },
    },
  },

  refs: {
    // primitives: {
    //   title: 'Primitives',
    //   url: 'http://localhost:4401',
    // },
    panda: {
      title: 'Panda',
      url: 'http://localhost:4402',
    },
    radix: {
      title: 'Panda + Radix',
      url: 'http://localhost:4403',
    },
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
