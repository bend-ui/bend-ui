import { create } from '@storybook/theming';
import { theme } from '@particles/theme';

const common = { brandTitle: 'Particles - Tailwind' };

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
