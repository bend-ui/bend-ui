import './index.css';
import '@fontsource-variable/inter';
import { createTheme } from '@bend-ui/storybook';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Container } from './decorators';
import type { Preview } from '@storybook/react-vite';

const theme = createTheme({ brandTitle: 'Bend UI - Ark' });

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
    (story: any, context: any) => {
      const selectedTone = context.globals.tone || 'flat';
      document.documentElement.setAttribute('data-tone', selectedTone);
      return story(context);
    },
  ],
  globalTypes: {
    tone: {
      description: 'The tone of the app',
      toolbar: {
        title: 'Tone',
        icon: 'circle',
        items: [
          { value: 'flat', title: 'Flat' },
          { value: 'real', title: 'Real' },
          { value: 'soft', title: 'Soft' },
          { value: 'glass', title: 'Glass' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    tone: 'flat',
  },
  tags: ['autodocs'],
};

export default preview;
