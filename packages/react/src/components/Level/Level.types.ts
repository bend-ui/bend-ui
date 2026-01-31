import type { ComponentProps, ReactNode } from 'react';

export interface LevelProps extends ComponentProps<'div'> {
  children?: ReactNode;
}
