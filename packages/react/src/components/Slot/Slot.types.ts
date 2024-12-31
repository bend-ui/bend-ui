import type { HTMLAttributes, ReactNode } from 'react';

export interface SlotProps extends HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
  children?: ReactNode;
}

export interface AsChildProps {
  asChild?: boolean;
}
