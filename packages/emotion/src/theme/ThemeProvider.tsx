import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react';
import type { ReactNode } from 'react';

export type ThemeProviderProps = EmotionThemeProviderProps & {
  children?: ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme = {} } = props;
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
