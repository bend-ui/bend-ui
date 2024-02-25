import { forwardRef } from 'react';
import { Accordion as AccordionPrimitive } from '@ark-ui/react';
import { accordion } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { AccordionProps } from './Accordion.types';
import type { ElementRef } from 'react';

const { withProvider, withContext } = createStyleContext(accordion);

const Root = withProvider(AccordionPrimitive.Root);

const Item = withContext(AccordionPrimitive.Item, 'item');

const ItemTrigger = withContext(AccordionPrimitive.ItemTrigger, 'trigger');

const ItemIndicator = withContext(
  AccordionPrimitive.ItemIndicator,
  'indicator',
);

const ItemContent = withContext(AccordionPrimitive.ItemContent, 'content');

const Component = forwardRef<ElementRef<typeof Root>, AccordionProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <Root ref={ref} {...rest}>
        {children}
      </Root>
    );
  },
);

Component.displayName = 'Accordion';

export const Accordion = Object.assign(Component, {
  Root,
  Item,
  ItemTrigger,
  ItemIndicator,
  ItemContent,
});
