import type { AlertVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef } from 'react';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  /** The alert color palette */
  palette?: AlertVariantProps['palette'];
  /** The alert variant */
  variant?: AlertVariantProps['variant'];
}
