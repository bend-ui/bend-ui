import './index.css';
import '@fontsource-variable/inter';
import { createTheme } from '@particles/storybook';
import { Container } from './decorators';
import type { Preview } from '@storybook/react';

const theme = createTheme({ brandTitle: 'Particles - Aria' });

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

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        icon: 'circlehollow',
        items: ['default', 'cloud'],
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
