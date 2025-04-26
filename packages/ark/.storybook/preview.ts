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
  (story, context) => {
    const selectedTone = context.globals.tone || 'flat';
    document.documentElement.setAttribute('data-tone', selectedTone);
    return story(context);
  },
];

const globalTypes: Preview['globalTypes'] = {
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
};

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
  globalTypes,
  initialGlobals: {
    tone: 'flat',
  },
  tags: [],
};

export default preview;
