import { Popover as PopoverPrimitive } from 'radix-ui';
import { popover } from '@bend-ui/styled-system/recipes';
import { styled } from '@bend-ui/styled-system/jsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(popover);

const Root = withProvider(PopoverPrimitive.Root, 'root');

const Trigger = withPart(PopoverPrimitive.Trigger, 'trigger');

const Content = withPart(PopoverPrimitive.Content, 'content');

const Arrow = withPart(PopoverPrimitive.Arrow, 'arrow');

const Close = withPart(PopoverPrimitive.Close, 'close');

export interface PopoverProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  children: ReactNode;
  trigger: ReactNode;
}

const Component = (props: PopoverProps) => {
  const { children, trigger, ...rest } = props;
  return (
    <Root {...rest}>
      <Trigger asChild>{trigger}</Trigger>
      <Content>
        <Arrow />
        <Close asChild>Close</Close>
        {children}
      </Content>
    </Root>
  );
};

export const Popover = Object.assign(Component, {
  Root,
  Trigger,
  Content,
  Arrow,
  Close,
});
