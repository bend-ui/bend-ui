const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');
const storybook = require('eslint-plugin-storybook');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      'storybook/no-uninstalled-addons': [
        'error',
        { packageJsonLocation: '../../package.json' },
      ],
    },
  },
];
