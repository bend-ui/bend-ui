import { Accordion as AccordionPrimitive } from '@base-ui-components/react';
import {
  accordion,
  AccordionVariantProps,
} from '@particles/styled-system/recipes';
import { withParts, withRecipe } from '../../utils/with-recipe';
import { forwardRef, HTMLAttributes } from 'react';
import { Box } from '@particles/styled-system/jsx';
import { LucideChevronDown } from 'lucide-react';

export interface AccordionRootProps extends AccordionPrimitive.Root.Props {
  children: React.ReactNode;
  attached?: AccordionVariantProps['attached'];
}

const AccordionRoot = withRecipe<AccordionRootProps>(
  AccordionPrimitive.Root,
  accordion,
  'root',
);

export interface AccordionItemProps extends AccordionPrimitive.Item.Props {
  children: React.ReactNode;
}

const AccordionItem = withParts<AccordionItemProps>(
  AccordionPrimitive.Item,
  'item',
);

export interface AccordionHeaderProps
  extends React.ComponentProps<typeof AccordionPrimitive.Header> {
  children: React.ReactNode;
}

const AccordionHeader = withParts<AccordionHeaderProps>(
  AccordionPrimitive.Header,
  'header',
);

export interface AccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  children: React.ReactNode;
}

const AccordionTrigger = withParts<AccordionTriggerProps>(
  AccordionPrimitive.Trigger,
  'item-trigger',
);

export type AccordionItemIndicatorProps = HTMLAttributes<HTMLDivElement>;

const AccordionIndicator = withParts<AccordionItemIndicatorProps>((props) => {
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

const AccordionPanel = withParts<AccordionPanelProps>(
  AccordionPrimitive.Panel,
  'item-content',
);

export type AccordionProps = AccordionRootProps;

const Component = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => (
  <AccordionRoot ref={ref} {...props} />
));

export const Accordion = Object.assign(Component, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Indicator: AccordionIndicator,
  Panel: AccordionPanel,
});
