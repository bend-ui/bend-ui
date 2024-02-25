import { Popover as PopoverPrimitive } from '@ark-ui/react';
import { popover } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { PopoverProps } from './Popover.types';
const { withProvider, withContext } = createStyleContext(popover);

const Root = withProvider(PopoverPrimitive.Root, 'root');
const Trigger = withContext(PopoverPrimitive.Trigger, 'trigger');
const Indicator = withContext(PopoverPrimitive.Indicator, 'indicator');
const Positioner = withContext(PopoverPrimitive.Positioner, 'positioner');
const Content = withContext(PopoverPrimitive.Content, 'content');
const Title = withContext(PopoverPrimitive.Title, 'title');
const Description = withContext(PopoverPrimitive.Description, 'description');

const Component = (props: PopoverProps) => (
  <Root {...props}>
    <Trigger>
      Click Me <Indicator>{'>'}</Indicator>
    </Trigger>
    <Positioner>
      <Content>
        <Title>Title</Title>
        <Description>Description</Description>
      </Content>
    </Positioner>
  </Root>
);

Component.displayName = 'Popover';

export const Popover = Object.assign(Component, {
  Root,
  Trigger,
  Indicator,
  Positioner,
  Content,
  Title,
  Description,
});
