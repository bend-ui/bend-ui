import './styles.css';
import { useDarkMode } from 'storybook-dark-mode';
import { createElement } from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import { themeDark, themeLight } from './themes';

const Container = (props) => {
  const isDark = useDarkMode();

  const { id: storyId, storyById } = props.context;
  const {
    parameters: { docs = {} },
  } = storyById(storyId);
  docs.theme = isDark ? themes.dark : themes.light;

  return createElement(DocsContainer, props);
};

export const parameters = {
  darkMode: {
    darkClass: 'dark-mode',
    lightClass: 'light-mode',
    stylePreview: true,
    dark: themeDark,
    light: themeLight,
  },
  docs: {
    container: Container,
  },
};
