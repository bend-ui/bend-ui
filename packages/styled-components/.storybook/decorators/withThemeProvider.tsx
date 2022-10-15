import { theme } from '@particles/theme';

import { DecoratorFn } from '@storybook/react';
import { ParticlesProvider } from '../../src';

const themes = {
  default: theme,
  fresh: {
    ...theme,
    styles: {
      Button: {
        root: {
          backgroundColor: '$success',
        },
      },
    },
  },
};

const getTheme = (themeName: keyof typeof themes) => themes[themeName];

export const withThemeProvider: DecoratorFn = (Story, context) => {
  const theme = getTheme(context.globals['theme']);
  return (
    <ParticlesProvider theme={theme}>
      <Story></Story>
    </ParticlesProvider>
  );
};
