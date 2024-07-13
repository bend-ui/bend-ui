import './index.css';
import '@fontsource-variable/inter';
import { createElement } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from '@storybook/addon-docs';
import { createTheme } from '@particles/storybook';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import type { Preview } from '@storybook/react';
import type { DocsContainerProps } from '@storybook/addon-docs';

const theme = createTheme({ brandTitle: 'Particles - React' });

const Container = (props: DocsContainerProps) => {
  const isDark = useDarkMode();
  const currentProps = { ...props };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  currentProps.theme = isDark ? theme.dark : theme.light;

  return createElement(DocsContainer, currentProps);
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
