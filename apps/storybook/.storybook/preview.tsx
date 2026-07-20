import './index.css';
import '@fontsource-variable/inter';
import { createTheme } from '@bend-ui/storybook';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Container } from './decorators';
import { mswHandlers } from './msw-handlers';
import type { Preview } from '@storybook/react-vite';

initialize({ onUnhandledRequest: 'bypass' });

const theme = createTheme({ brandTitle: 'Bend UI' });

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
    a11y: {
      test: 'todo',
    },
    msw: {
      handlers: mswHandlers,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        Stratus: 'stratus',
        Solstice: 'solstice',
        Volt: 'volt',
        Nebula: 'nebula',
        Canopy: 'canopy',
        Aster: 'aster',
      },
      defaultTheme: 'Stratus',
      attributeName: 'data-panda-theme',
    }),
  ],
  loaders: [mswLoader],
  tags: ['autodocs'],
  async beforeEach() {
    document.documentElement.setAttribute('data-panda-theme', 'stratus');
  },
};

export default preview;
