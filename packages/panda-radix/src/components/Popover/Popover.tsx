import * as PopoverPrimitive from '@radix-ui/react-popover';
import { popover } from '@particles/panda-system/recipes';
import { createStyleContext } from '../../utils';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

const { withContext, withProvider } = createStyleContext(popover);

const Root = withProvider(PopoverPrimitive.Root, 'root');

const Trigger = withContext(PopoverPrimitive.Trigger, 'trigger');

const Content = withContext(PopoverPrimitive.Content, 'content');

const Arrow = withContext(PopoverPrimitive.Arrow, 'arrow');

const Close = withContext(PopoverPrimitive.Close, 'close');

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
