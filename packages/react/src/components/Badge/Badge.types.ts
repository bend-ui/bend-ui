import type { BadgeVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode;
  palette?: BadgeVariantProps['palette'];
}
