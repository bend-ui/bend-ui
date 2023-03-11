import 'system-props';
import type { Theme as DefaultTheme } from '@particles/theme';

declare module 'system-props' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultTheme {}
}
