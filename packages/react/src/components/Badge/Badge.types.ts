import type { BadgeVariantProps } from '@bend-ui/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  palette?: BadgeVariantProps['palette'];
  variant?: BadgeVariantProps['variant'];
}
