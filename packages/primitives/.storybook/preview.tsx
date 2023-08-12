import './styles.css';
import { createElement } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from '@storybook/addon-docs';
import { themeDark, themeLight } from './themes';

import type { Preview } from '@storybook/react';
import type { DocsContainerProps } from '@storybook/addon-docs';

const Container = (props: DocsContainerProps) => {
  const isDark = useDarkMode();
  const currentProps = { ...props };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  currentProps.theme = isDark ? themeDark : themeLight;

  return createElement(DocsContainer, currentProps);
};

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      stylePreview: true,
      dark: themeDark,
      light: themeLight,
    },
    docs: {
      container: Container,
    },
  },
};

export default preview;
