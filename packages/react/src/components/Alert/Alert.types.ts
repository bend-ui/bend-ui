import type { AlertVariantProps } from '@bend-ui/styled-system/recipes';
import type { HTMLBendUIProps } from '../factory';
import { ReactNode } from 'react';

export interface AlertRootProps extends HTMLBendUIProps<'div'> {
  /** The alert color palette */
  palette?: AlertVariantProps['palette'];
  /** The alert variant */
  variant?: AlertVariantProps['variant'];
  /** The alert onDismiss */
  onDismiss?: () => void;
}

export interface AlertCompositionProps {
  /** The alert icon */
  icon?: ReactNode;
  /** The alert title */
  title?: ReactNode;
  /** The alert content */
  children?: ReactNode;
  /** The alert footer */
  footer?: ReactNode;
}

export type AlertProps = AlertRootProps & AlertCompositionProps;
