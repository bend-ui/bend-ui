import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { TbCheck } from 'react-icons/tb';
import { cx } from '@particles/panda-system/css';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cx(className)} {...props}>
    <CheckboxPrimitive.Indicator className={cx()}>
      <TbCheck />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
