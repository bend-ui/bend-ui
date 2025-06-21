import './index.css';
import '@fontsource-variable/inter';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Container } from './decorators';
import { theme } from './theme';

import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      stylePreview: true,
      dark: theme.dark,
      light: theme.light,
    },
    docs: {
      container: Container,
    },
    controls: {
      hideNoControlsWarning: true,
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        Default: 'default',
        Proton: 'proton',
        Neutron: 'neutron',
        Quark: 'quark',
      },
      defaultTheme: 'default',
      attributeName: 'data-panda-theme',
    }),
  ],

  tags: ['autodocs'],
};

export default preview;
