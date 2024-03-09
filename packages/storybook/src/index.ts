import { create } from '@storybook/theming';
import { theme } from '@particles/theme';
import type { ThemeVars } from '@storybook/theming';

const common: Partial<ThemeVars> = {
  brandTitle: 'Particles',
  colorPrimary: theme.colors.indigo500,
  colorSecondary: theme.colors.indigo600,
};

export const themeLight = create({
  base: 'light',
  ...common,
  appBg: theme.colors.shark50,
  appContentBg: theme.colors.shark50,
  appBorderColor: theme.colors.shark100,

  textMutedColor: theme.colors.shark500,

  barBg: theme.colors.shark50,
  barSelectedColor: theme.colors.indigo500,

  inputBg: theme.colors.shark50,
  inputBorder: theme.colors.shark200,
});

export const themeDark = create({
  base: 'dark',
  ...common,
  appBg: theme.colors.shark900,
  appContentBg: theme.colors.shark900,
  appBorderColor: theme.colors.shark700,

  textMutedColor: theme.colors.shark500,

  barBg: theme.colors.shark900,
  barSelectedColor: theme.colors.indigo500,

  inputBg: theme.colors.shark800,
  inputBorder: theme.colors.shark500,
});

export const createTheme = (overrides: Partial<ThemeVars>) => ({
  light: { ...themeLight, ...overrides },
  dark: { ...themeDark, ...overrides },
});
