import './index.css';
import '@fontsource-variable/inter';
import { createTheme } from '@particles/storybook';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Container } from './decorators';

import type { Preview } from '@storybook/react';

const theme = createTheme({ brandTitle: 'Particles - React' });

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
