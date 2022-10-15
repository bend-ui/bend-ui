import { theme as defaultTheme, Theme } from '@particles/theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createContext } from '@particles/primitives';
import { CSSVars } from './CSSVars';
import { GlobalStyles } from './GlobalStyles';
import { ResetStyles } from './ResetStyles';
import { ThemeProvider } from './ThemeProvider';

type ParticlesDefaultProps = Record<string, Record<string, any>>;

export interface ParticlesContextProps {
  defaultProps?: ParticlesDefaultProps;
}

export const [ParticlesContextProvider, useParticlesContext] =
  createContext<ParticlesContextProps>('ParticlesProvider', {
    defaultProps: {},
  });

const particlesCache = createCache({
  key: 'particles',
});

export interface ParticlesProviderProps extends ParticlesContextProps {
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
    defaultProps,
  } = props;

  return (
    <ParticlesContextProvider value={{ defaultProps }}>
      <CacheProvider value={particlesCache}>
        <ThemeProvider theme={theme}>
          <CSSVars theme={theme} />
          {withResetStyles && <ResetStyles />}
          {withGlobalStyles && <GlobalStyles />}
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ParticlesContextProvider>
  );
};
