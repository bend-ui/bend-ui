import { theme as defaultTheme, Theme } from '@particles/theme';
import { CSSVars } from './CSSVars';
import { GlobalStyles } from './GlobalStyles';
import { ResetStyles } from './ResetStyles';
import { ThemeProvider } from './ThemeProvider';

export interface ParticlesProviderProps {
  children?: React.ReactNode;
  theme?: Theme;
  withResetStyles?: boolean;
  withGlobalStyles?: boolean;
}

export const ParticlesProvider = (props: ParticlesProviderProps) => {
  const {
    children,
    theme = defaultTheme,
    withResetStyles = true,
    withGlobalStyles = true,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <CSSVars />
      {withResetStyles && <ResetStyles />}
      {withGlobalStyles && <GlobalStyles />}
      {children}
    </ThemeProvider>
  );
};
