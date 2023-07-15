import '../src/index.css';

import { withThemeByDataAttribute } from '@storybook/addon-styling';

import { themeDark, themeLight } from './themes';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      stylePreview: true,
      dark: themeDark,
      light: themeLight,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-color-mode',
    }),
  ],
};

export default preview;
