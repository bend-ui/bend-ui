import { forwardRef } from 'react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { TbCheck } from 'react-icons/tb';
import { cx } from '@particles/styled-system/css';
import { styled } from '@particles/styled-system/jsx';
import { checkbox } from '@particles/styled-system/recipes';
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
  const styles = checkbox();
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cx('peer', styles, className)}
      {...rest}
    >
      <CheckboxPrimitive.Indicator className={cx(styles)}>
        <TbCheck />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Root.displayName = CheckboxPrimitive.Root.displayName;

export const Checkbox = styled(Root);
