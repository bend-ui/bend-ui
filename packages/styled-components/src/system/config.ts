import type { ReactNode } from 'react';
import type { CSSFunctionArgs } from 'system-props';

export interface SystemProps {
  sx?: CSSFunctionArgs<'prefix'>;
  styles?: CSSFunctionArgs<'prefix'>;
  children?: ReactNode;
}
