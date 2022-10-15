import { useEffect } from 'react';
import { createContext } from '@particles/primitives';

const changeTheme = (theme) => {
  const el = document.documentElement;

  el.classList.add(theme.className);
};

export const [ThemeContextProvider, useTheme] = createContext('Theme', {
  theme: {},
});

export interface ThemeProps {
  theme: any;
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProps) => {
  const { children, theme } = props;
  const context = { theme };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <ThemeContextProvider value={context}>{children}</ThemeContextProvider>
  );
};
