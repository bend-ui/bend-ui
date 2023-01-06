import { withPerformance } from 'storybook-addon-performance';
import { withThemeProvider } from './decorators/withThemeProvider';
import { DocsContainer } from './DocsContainer';
import { themeDark, themeLight } from './themes';

export const parameters = {
  darkMode: {
    current: 'dark',
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
    classTarget: 'html',
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
      icon: 'lightning',
      items: ['default', 'fresh'],
      showName: true,
    },
  },
};

export const decorators = [withThemeProvider, withPerformance];
