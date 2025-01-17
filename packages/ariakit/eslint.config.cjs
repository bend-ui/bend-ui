const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');
const storybook = require('eslint-plugin-storybook');
const panda = require('@pandacss/eslint-plugin');
const path = require('path');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  ...storybook.configs['flat/recommended'],
  {
    plugins: {
      '@pandacss': panda,
    },
    settings: {
      '@pandacss/configPath': path.join(__dirname, 'panda.config.ts'),
    },
    rules: {
      ...panda.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
