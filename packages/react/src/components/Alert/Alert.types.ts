import type { AlertVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef } from 'react';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  palette?: AlertVariantProps['palette'];
  variant?: AlertVariantProps['variant'];
}
