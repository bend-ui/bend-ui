import { Switch as SwitchPrimitive } from 'radix-ui';
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Root = SwitchPrimitive.Root;

const Thumb = SwitchPrimitive.Thumb;

export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;

const Component = forwardRef<
  ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>((props, ref) => {
  const { ...rest } = props;
  return (
    <Root ref={ref} {...rest}>
      <Thumb />
    </Root>
  );
});

Component.displayName = 'Switch';

export const Switch = Object.assign(Component, {
  Root,
  Thumb,
});
