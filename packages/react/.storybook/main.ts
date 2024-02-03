import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-interactions',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    '@chromaui/addon-visual-tests',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/react/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: true,
  },
};

export default config;
