import { defineTokens } from '@pandacss/dev';
import { theme } from '@particles/theme';

export const colors = defineTokens.colors({
  shark: {
    50: {
      value: theme.colors.shark50,
    },
    100: {
      value: theme.colors.shark100,
    },
    200: {
      value: theme.colors.shark200,
    },
    300: {
      value: theme.colors.shark300,
    },
    400: {
      value: theme.colors.shark400,
    },
    500: {
      value: theme.colors.shark500,
    },
    600: {
      value: theme.colors.shark600,
    },
    700: {
      value: theme.colors.shark700,
    },
    800: {
      value: theme.colors.shark800,
    },
    900: {
      value: theme.colors.shark900,
    },
  },
  denim: {
    50: { value: '#eef9ff' },
    100: { value: '#d9f2ff' },
    200: { value: '#bbe9ff' },
    300: { value: '#8cdcff' },
    400: { value: '#56c6ff' },
    500: { value: '#2fa9ff' },
    600: { value: '#188bf8' },
    700: { value: '#1172e4' },
    800: { value: '#1662c5' },
    900: { value: '#174f91' },
    // '950': '#133158',
  },
});
