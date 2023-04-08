import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  core: { builder: 'webpack5' },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@nrwl/react/plugins/storybook',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    'storybook-addon-performance',
  ],
};

module.exports = config;
