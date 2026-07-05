// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

const aiGeneratedStories = [
  '../../../packages/react/src/components/Box/Box.stories.tsx',
  '../../../packages/react/src/components/Grid/Grid.stories.tsx',
  '../../../packages/react/src/components/Code/Code.stories.tsx',
  '../../../packages/react/src/components/Textarea/Textarea.stories.tsx',
  '../../../packages/react/src/components/FormField/FormField.stories.tsx',
  '../../../packages/react/src/components/AppShell/AppShell.stories.tsx',
  '../../../packages/react/src/components/Stack/Stack.stories.tsx',
  '../../../packages/react/src/components/DismissButton/DismissButton.stories.tsx',
  '../../../packages/react/src/components/Slot/Slot.stories.tsx',
  '../../../packages/react/src/components/Input/PasswordInput/PasswordInput.stories.tsx',
];

const config: StorybookConfig = {
  stories: ['../src/**/*.@(js|jsx|ts|tsx|mdx)', ...aiGeneratedStories],

  staticDirs: ['../public'],

  addons: [
    getAbsolutePath('@vueless/storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        viteConfigPath: 'apps/storybook/vite.config.ts',
      },
    },
  },

  refs: {
    // primitives: {
    //   title: 'Primitives',
    //   url: 'http://localhost:4401',
    // },
    panda: {
      title: 'Panda',
      url: 'http://localhost:4402',
    },
    radix: {
      title: 'Panda + Radix',
      url: 'http://localhost:4403',
    },
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
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
          /@bend-ui\/styled-system/.test(fileName)
        ) {
          return false;
        }

        return true;
      },
    },
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
