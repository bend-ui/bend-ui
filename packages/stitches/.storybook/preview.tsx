import { withPerformance } from 'storybook-addon-performance';
import { darkTheme, globalStyles, ThemeProvider } from '../src/styles';
import { modernTheme } from '../src/themes';
import { DocsContainer } from './DocsContainer';
import { themeDark, themeLight } from './themes';

export const parameters = {
  darkMode: {
    current: 'dark',
    darkClass: darkTheme.className,
    lightClass: undefined,
    stylePreview: true,
    classTarget: 'body',
    dark: themeDark,
    light: themeLight,
  },
  docs: {
    container: DocsContainer,
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: ['default', 'modern'],
      title: 'Theme',
    },
  },
};

const Themes = {
  default: darkTheme,
  modern: modernTheme,
};

const getTheme = (themeName) => {
  return Themes[themeName];
};

const withThemeProvider = (Story, context) => {
  globalStyles();
  const theme = getTheme(context.globals.theme);

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider, withPerformance];
