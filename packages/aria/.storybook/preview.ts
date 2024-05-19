import './index.css';
import '@fontsource-variable/inter';
import { createElement } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from '@storybook/addon-docs';
import { createTheme } from '@particles/storybook';

import type { Preview } from '@storybook/react';
import type { DocsContainerProps } from '@storybook/addon-docs';

const theme = createTheme({ brandTitle: 'Particles - Aria' });

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
