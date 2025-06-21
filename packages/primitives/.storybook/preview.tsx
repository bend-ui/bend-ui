import './styles.css';
import { createElement } from 'react';
import { useDarkMode } from '@vueless/storybook-dark-mode';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { createTheme } from '@particles/storybook';

import type { Preview } from '@storybook/react-vite';
import type { DocsContainerProps } from '@storybook/addon-docs/blocks';

const theme = createTheme({ brandTitle: 'Particles - Primitives' });

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
  },

  tags: ['autodocs'],
};

export default preview;
