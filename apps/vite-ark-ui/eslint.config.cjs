const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');
const panda = require('@pandacss/eslint-plugin');
const path = require('path');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    plugins: {
      '@pandacss': panda,
    },
    settings: {
      '@pandacss/configPath': path.join(__dirname, 'panda.config.ts'),
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      ...panda.configs.recommended.rules,
      '@pandacss/file-not-included': 'off',
    },
  },
];
