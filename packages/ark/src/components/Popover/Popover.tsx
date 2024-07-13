import { Popover as PopoverPrimitive } from '@ark-ui/react';
import { popover } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import { Button } from '..';
import type { PopoverProps } from './Popover.types';
const { withRootProvider, withContext } = createStyleContext(popover);

const Root = withRootProvider(PopoverPrimitive.Root);

const Trigger = withContext<HTMLButtonElement, PopoverPrimitive.TriggerProps>(
  PopoverPrimitive.Trigger,
  'trigger',
);

Trigger.displayName = 'Popover.Trigger';

const Indicator = withContext<HTMLDivElement, PopoverPrimitive.IndicatorProps>(
  PopoverPrimitive.Indicator,
  'indicator',
);

Indicator.displayName = 'Popover.Indicator';

const Positioner = PopoverPrimitive.Positioner;

Positioner.displayName = 'Popover.Positioner';

const Content = withContext<HTMLDivElement, PopoverPrimitive.ContentProps>(
  PopoverPrimitive.Content,
  'content',
);

Content.displayName = 'Popover.Content';

const Title = withContext<HTMLDivElement, PopoverPrimitive.TitleProps>(
  PopoverPrimitive.Title,
  'title',
);

Title.displayName = 'Popover.Title';

const Description = withContext<
  HTMLParagraphElement,
  PopoverPrimitive.DescriptionProps
>(PopoverPrimitive.Description, 'description');

Description.displayName = 'Popover.Description';

const Component = (props: PopoverProps) => (
  <Root {...props}>
    <Trigger>
      <Button>Click Me &gt;</Button>
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
