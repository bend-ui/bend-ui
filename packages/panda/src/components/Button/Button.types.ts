import type { ButtonVariantProps } from '@particles/panda-system/recipes';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  as?: ElementType;
  children?: ReactNode;
  palette?: ButtonVariantProps['palette'];
  variant?: ButtonVariantProps['variant'];
  size?: ButtonVariantProps['size'];
  isRounded?: ButtonVariantProps['isRounded'];
  /** Disable the button */
  isDisabled?: boolean;
  /** Set the button in a loading state */
  isLoading?: boolean;
  icon?: ReactNode;
  iconEnd?: ReactNode;
};
