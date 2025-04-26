import type { StorybookConfig } from '@storybook/react-vite';

// These options were migrated by @nx/storybook:convert-to-inferred from the project.json file.
// const configValues = { default: {}, ci: {} };

// Determine the correct configValue to use based on the configuration
// const nxConfiguration = process.env.NX_TASK_TARGET_CONFIGURATION ?? 'default';

// const options = {
//   ...configValues.default,
//   ...(configValues[nxConfiguration] ?? {}),
// };

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../react/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    // '@storybook/experimental-addon-test',
    'storybook-addon-tag-badges',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: './vite.config.ts',
      },
    },
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          'storybook-dark-mode',
          '@storybook/theming',
          '@particles/storybook',
        ],
      },
    });
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   shouldRemoveUndefinedFromOptional: true,
    //   propFilter: (prop) => {
    //     if (prop.parent) {
    //       if (
    //         prop.parent.fileName.match(/@ark-ui/) ||
    //         prop.parent.fileName.match(/@particles/)
    //       ) {
    //         return true;
    //       } else {
    //         return !/node_modules/.test(prop.parent.fileName);
    //       }
    //     }
    //     return true;
    //   },
    // },
  },
  docs: {},
};

export default config;
