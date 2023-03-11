import { useContext } from 'react';
import {
  ThemeContext as ThemeContextSc,
  ThemeProvider as ThemeProviderSc,
  useTheme as useThemeSc,
} from 'styled-components';
import type { Theme } from '@particles/theme';
import type { ReactNode } from 'react';

export const useTheme = useThemeSc;

export const ThemeContext = ThemeContextSc;

export function useThemeStyles() {
  return useContext(ThemeContextSc)?.styles || {};
}

export interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme, children } = props;
  return <ThemeProviderSc theme={theme}>{children}</ThemeProviderSc>;
};

ThemeProvider.displayName = 'ThemeProvider';
