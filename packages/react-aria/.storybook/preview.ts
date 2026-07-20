import './index.css';
import '@fontsource-variable/inter';
import { createTheme } from '@bend-ui/storybook';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Container } from './decorators';
import type { Preview } from '@storybook/react-vite';

const theme = createTheme({ brandTitle: 'Bend UI - Aria' });

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
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
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
  tags: ['autodocs'],
};

export default preview;
