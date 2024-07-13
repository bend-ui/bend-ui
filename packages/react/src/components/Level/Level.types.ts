import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface LevelProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}
