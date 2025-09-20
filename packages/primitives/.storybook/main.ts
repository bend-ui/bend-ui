import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

// These options were migrated by @nx/storybook:convert-to-inferred from the project.json file.
// const configValues = { default: {}, ci: {} };

// Determine the correct configValue to use based on the configuration
// const nxConfiguration = process.env.NX_TASK_TARGET_CONFIGURATION ?? 'default';

// const options = {
//   ...configValues.default,
//   ...(configValues[nxConfiguration] ?? {}),
// };

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@vueless/storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        viteConfigPath: './vite.config.ts',
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // 👇 Default prop filter, which excludes props from node_modules
      propFilter: (prop) => {
        if (!prop.parent) return true;

        const fileName = prop.parent.fileName;

        // Filter out node_modules
        if (/node_modules/.test(fileName)) {
          return false;
        }

        // Filter out styled-system package (both relative and absolute paths)
        if (
          /packages\/styled-system/.test(fileName) ||
          /@particles\/styled-system/.test(fileName)
        ) {
          return false;
        }

        return true;
      },
    },
  },
  docs: {},
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
