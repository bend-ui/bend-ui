import { Theme as DefaultTheme } from '@particles/theme';
import '@emotion/react';
import 'system-props';

declare module '@emotion/react' {
  export type Theme = DefaultTheme;
}

declare module 'system-props' {
  export type Theme = DefaultTheme;
}
