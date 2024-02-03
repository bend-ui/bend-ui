import type { Accordion as AccordionPrimitive } from '@ark-ui/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface AccordionProps
  extends ComponentPropsWithoutRef<typeof AccordionPrimitive> {
  children: ReactNode;
}
