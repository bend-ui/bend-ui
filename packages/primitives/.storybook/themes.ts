import { create } from 'storybook/theming';
import { theme } from '@bend-ui/theme';

const common = { brandTitle: 'Bend UI - Primitives' };

export const themeLight = create({
  base: 'light',
  ...common,
  appBg: theme.colors.canvas,
  appContentBg: theme.colors.canvas,
});

export const themeDark = create({
  base: 'dark',
  ...common,
  appBg: theme.colors.neutral800,
  appContentBg: theme.colors.neutral900,
});
