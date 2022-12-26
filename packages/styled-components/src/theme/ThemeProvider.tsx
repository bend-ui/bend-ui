import { Theme } from '@particles/theme';
import { ReactNode, useContext } from 'react';
import {
  ThemeContext as ThemeContextSc,
  ThemeProvider as ThemeProviderSc,
  useTheme as useThemeSc,
} from 'styled-components';

export const useTheme = useThemeSc;

export const ThemeContext = ThemeContextSc;

export function useThemeStyles() {
  return useContext(ThemeContextSc)?.styles || {};
}

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = (props) => {
  const { theme, children } = props;
  return <ThemeProviderSc theme={theme}>{children}</ThemeProviderSc>;
};

ThemeProvider.displayName = 'ThemeProvider';
