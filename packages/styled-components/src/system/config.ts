import { ReactNode } from 'react';
import { CSSFunctionArgs } from 'system-props';

export interface SystemProps {
  sx?: CSSFunctionArgs<'prefix'>;
  styles?: CSSFunctionArgs<'prefix'>;
  children?: ReactNode;
}
