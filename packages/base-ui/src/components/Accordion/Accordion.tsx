import { Accordion as AccordionPrimitive } from '@base-ui-components/react';
import {
  accordion,
  AccordionVariantProps,
} from '@particles/styled-system/recipes';
import { withParts, withRecipe } from '../../utils/with-recipe';
import { forwardRef, HTMLAttributes } from 'react';
import { Box } from '@particles/styled-system/jsx';
import { LucideChevronDown } from 'lucide-react';

export interface AccordionProps
  extends React.ComponentProps<typeof AccordionPrimitive.Root> {
  children: React.ReactNode;
  attached?: AccordionVariantProps['attached'];
}

const Root = withRecipe<AccordionProps>(
  AccordionPrimitive.Root,
  accordion,
  'root',
);

export interface AccordionItemProps
  extends React.ComponentProps<typeof AccordionPrimitive.Item> {
  children: React.ReactNode;
}

const Item = withParts<AccordionItemProps>(AccordionPrimitive.Item, 'item');

export interface AccordionHeaderProps
  extends React.ComponentProps<typeof AccordionPrimitive.Header> {
  children: React.ReactNode;
}

const Header = withParts<AccordionHeaderProps>(
  AccordionPrimitive.Header,
  'header',
);

export interface AccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  children: React.ReactNode;
}

const Trigger = withParts<AccordionTriggerProps>(
  AccordionPrimitive.Trigger,
  'item-trigger',
);

export type AccordionItemIndicatorProps = HTMLAttributes<HTMLDivElement>;

const Indicator = withParts<AccordionItemIndicatorProps>((props) => {
  // const { open } = useAccordionItemContext();
  return (
    <Box {...props}>
      <LucideChevronDown />
    </Box>
  );
}, 'item-indicator');

export interface AccordionPanelProps
  extends React.ComponentProps<typeof AccordionPrimitive.Panel> {
  children: React.ReactNode;
}

const Panel = withParts<AccordionPanelProps>(
  AccordionPrimitive.Panel,
  'item-content',
);

const Component = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => (
  <Root ref={ref} {...props} />
));

export const Accordion = Object.assign(Component, {
  Root,
  Item,
  Header,
  Trigger,
  Indicator,
  Panel,
});
