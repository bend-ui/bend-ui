import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { TbCheck } from 'react-icons/tb';
import { cx } from '@particles/panda-system/css';
import { styled } from '@particles/panda-system/jsx';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  children?: never;
}

const Root = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cx('peer', className)}
      {...rest}
    >
      <CheckboxPrimitive.Indicator className={cx()}>
        <TbCheck />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Root.displayName = CheckboxPrimitive.Root.displayName;

export const Checkbox = styled(Root);
