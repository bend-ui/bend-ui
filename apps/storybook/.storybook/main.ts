import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-interactions',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
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
};

export default config;
