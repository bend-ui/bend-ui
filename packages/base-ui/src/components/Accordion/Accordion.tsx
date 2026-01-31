import { Accordion as AccordionPrimitive } from '@base-ui/react';
import {
  accordion,
  AccordionVariantProps,
} from '@particles/styled-system/recipes';
import { withParts, withRecipe } from '@particles/react';
import { Box } from '@particles/styled-system/jsx';
import { LucideChevronDown } from 'lucide-react';
import { Assign } from '@particles/styled-system/types';
import { HTMLParticlesProps } from '@particles/react';

export interface AccordionRootProps
  extends Assign<AccordionPrimitive.Root.Props, HTMLParticlesProps<'div'>> {
  children?: React.ReactNode;
  attached?: AccordionVariantProps['attached'];
}

const AccordionRoot = withRecipe<AccordionRootProps>(
  AccordionPrimitive.Root,
  accordion,
  'root',
);

export interface AccordionItemProps
  extends Assign<AccordionPrimitive.Item.Props, HTMLParticlesProps<'button'>> {
  children?: React.ReactNode;
}

const AccordionItem = withParts<AccordionItemProps>(
  AccordionPrimitive.Item,
  'item',
);

export interface AccordionHeaderProps
  extends Assign<
    AccordionPrimitive.Header.Props,
    HTMLParticlesProps<'button'>
  > {
  children?: React.ReactNode;
}

const AccordionHeader = withParts<AccordionHeaderProps>(
  AccordionPrimitive.Header,
  'header',
);

export interface AccordionTriggerProps
  extends Assign<
    AccordionPrimitive.Trigger.Props,
    HTMLParticlesProps<'button'>
  > {
  children?: React.ReactNode;
}

const AccordionTrigger = withParts<AccordionTriggerProps>(
  AccordionPrimitive.Trigger,
  'item-trigger',
);

export interface AccordionItemIndicatorProps extends HTMLParticlesProps<'div'> {
  children?: React.ReactNode;
}

const AccordionIndicator = withParts<AccordionItemIndicatorProps>((props) => {
  return (
    <Box {...props}>
      <LucideChevronDown />
    </Box>
  );
}, 'item-indicator');

export interface AccordionPanelProps
  extends Assign<AccordionPrimitive.Panel.Props, HTMLParticlesProps<'div'>> {
  children: React.ReactNode;
}

const AccordionPanel = withParts<AccordionPanelProps>(
  AccordionPrimitive.Panel,
  'item-content',
);

export type AccordionProps = AccordionRootProps;

const Component = (props: AccordionProps) => <AccordionRoot {...props} />;

export const Accordion = Object.assign(Component, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Indicator: AccordionIndicator,
  Panel: AccordionPanel,
});
