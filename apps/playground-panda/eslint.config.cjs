const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');
const nextVitals = require('eslint-config-next/core-web-vitals');
const nextTs = require('eslint-config-next/typescript');

module.exports = [
  ...nextVitals,
  ...nextTs,
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  {
    ignores: ['.next/**/*'],
  },
];
