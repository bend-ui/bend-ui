import type { ButtonVariantProps } from '@bend-ui/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  palette?: ButtonVariantProps['palette'];
  /** The variant of the button */
  variant?: ButtonVariantProps['variant'];
  /** The size of the button */
  size?: ButtonVariantProps['size'];
  isRounded?: ButtonVariantProps['isRounded'];
  icon?: ReactNode;
  iconEnd?: ReactNode;
  isLoading?: boolean;
}
