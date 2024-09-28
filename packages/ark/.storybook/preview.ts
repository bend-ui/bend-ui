import './index.css';
import '@fontsource-variable/inter';
import { createTheme } from '@particles/storybook';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Container } from './decorators';
import type { Preview } from '@storybook/react';

const theme = createTheme({ brandTitle: 'Particles - Ark' });

const decorators: Preview['decorators'] = [
  withThemeByDataAttribute({
    themes: {
      Proton: 'proton',
      Neutron: 'neutron',
      Quark: 'quark',
    },
    defaultTheme: 'proton',
    attributeName: 'data-panda-theme',
  }),
];

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

  decorators,

  tags: ['autodocs'],
};

export default preview;
