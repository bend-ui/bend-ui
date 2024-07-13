import type { HTMLStyledProps } from '@particles/styled-system/types';
import type { ButtonVariantProps } from '@particles/styled-system/recipes';
import type { AsChildProps } from '../Slot';
import type { ReactNode } from 'react';

export interface ButtonProps extends HTMLStyledProps<'button'>, AsChildProps {
  children?: ReactNode;
  palette?: ButtonVariantProps['palette'];
  variant?: ButtonVariantProps['variant'];
  size?: ButtonVariantProps['size'];
  isRounded?: ButtonVariantProps['isRounded'];
  isFull?: ButtonVariantProps['isFull'];
  /** Disable the button */
  isDisabled?: boolean;
  /** Set the button in a loading state */
  isLoading?: boolean;
  icon?: ReactNode;
  iconEnd?: ReactNode;
}
