import { createContext } from '@particles/primitives';
import { Theme, theme } from '@particles/theme';

export const [ThemeContextProvider, useTheme] = createContext('Theme', {
  theme: { ...theme, components: {} },
});

export interface ThemeProps {
  children?: React.ReactNode;
  theme?: Theme;
}

export const ThemeProvider = (props: ThemeProps) => {
  const { children, theme } = props;
  const context = { theme };

  return (
    <ThemeContextProvider value={context}>{children}</ThemeContextProvider>
  );
};
