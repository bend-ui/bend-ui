const path = require('path');

module.exports = {
  stories: [],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-docs',
    'storybook-dark-mode',
    'storybook-addon-performance/register',
    '@nrwl/react/plugins/storybook',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  core: {
    builder: 'webpack5',
  },
};
