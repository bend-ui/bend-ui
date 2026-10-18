const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');
const storybook = require('eslint-plugin-storybook');
const { recommended } = require('@pandacss/eslint-plugin');
const path = require('path');

module.exports = (async () => {
  const pandaConfig = await recommended({
    configPath: path.join(__dirname, 'panda.config.ts'),
    files: ['src/**/*.{ts,tsx}'],
  });
  return [
    ...baseConfig,
    ...nx.configs['flat/react'],
    ...storybook.configs['flat/recommended'],
    {
      ...pandaConfig,
      ignores: ['**/*.spec.*', '**/*.test.*'],
      rules: {
        ...pandaConfig.rules,
        'storybook/no-uninstalled-addons': [
          'error',
          { packageJsonLocation: '../../package.json' },
        ],
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      // Override or add rules here
      rules: {},
    },
  ];
})();
