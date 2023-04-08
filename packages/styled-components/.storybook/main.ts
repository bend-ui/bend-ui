import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  core: { builder: 'webpack5' },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@nrwl/react/plugins/storybook',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    'storybook-addon-performance',
  ],
};

module.exports = config;
