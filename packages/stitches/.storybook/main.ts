import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {},
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@nx/react/plugins/storybook',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    'storybook-addon-performance',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/stitches/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: true,
  },
};

module.exports = config;
