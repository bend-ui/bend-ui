import {
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';

export type ThemeProviderProps = EmotionThemeProviderProps;

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, theme = {} } = props;
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
