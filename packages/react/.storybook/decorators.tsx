import { useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { createTheme } from '@particles/storybook';
import type React from 'react';
import type { DocsContextProps } from '@storybook/addon-docs/blocks';
import type { ThemeVars } from 'storybook/theming';

const theme = createTheme({ brandTitle: 'Particles - React' });

const LOCAL_STORAGE_KEY = '_tmp-dark-mode-hack';

export const isDarkModeEnabled = () =>
  Boolean(localStorage.getItem(LOCAL_STORAGE_KEY));

export const setDarkModeEnabled = (enabled: boolean) =>
  enabled
    ? localStorage.setItem(LOCAL_STORAGE_KEY, '1')
    : localStorage.removeItem(LOCAL_STORAGE_KEY);

export const Container = (props: {
  children: React.ReactNode;
  context: DocsContextProps;
  theme?: ThemeVars;
}) => {
  const { context } = props;
  const [isDark, setDark] = useState(isDarkModeEnabled());

  useEffect(() => {
    context.channel.on(DARK_MODE_EVENT_NAME, (state) => {
      setDarkModeEnabled(state);
      setDark(state);
    });

    return () => context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [context.channel]);

  return <DocsContainer {...props} theme={isDark ? theme.dark : theme.light} />;
};
