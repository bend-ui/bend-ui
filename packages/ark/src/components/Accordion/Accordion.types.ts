import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface AccordionProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}
