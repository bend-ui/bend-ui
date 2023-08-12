import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {},
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@nx/react/plugins/storybook',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    'storybook-addon-performance',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/primitives/vite.config.ts',
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // 👇 Default prop filter, which excludes props from node_modules
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  docs: {
    autodocs: true,
  },
};

export default config;
