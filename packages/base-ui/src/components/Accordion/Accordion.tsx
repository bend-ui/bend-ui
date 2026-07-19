import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import {
  accordion,
  AccordionVariantProps,
} from '@bend-ui/styled-system/recipes';
import { Box, createStyleContext } from '@bend-ui/styled-system/jsx';
import { LucideChevronDown } from 'lucide-react';
import { Assign } from '@bend-ui/styled-system/types';
import { HTMLBendUIProps, withParts } from '@bend-ui/core';

export interface AccordionRootProps extends Assign<
  AccordionPrimitive.Root.Props,
  HTMLBendUIProps<'div'>
> {
  children?: React.ReactNode;
  attached?: AccordionVariantProps['attached'];
}

const { withProvider, withContext } = createStyleContext(accordion);

const AccordionRoot = withProvider(AccordionPrimitive.Root, 'root', {
  defaultProps: { 'data-part': 'root' },
}) as unknown as React.ComponentType<AccordionRootProps>;

export interface AccordionItemProps extends Assign<
  AccordionPrimitive.Item.Props,
  HTMLBendUIProps<'button'>
> {
  children?: React.ReactNode;
}

const AccordionItem = withContext(AccordionPrimitive.Item, 'item', {
  defaultProps: { 'data-part': 'item' },
});

export interface AccordionHeaderProps extends Assign<
  AccordionPrimitive.Header.Props,
  HTMLBendUIProps<'button'>
> {
  children?: React.ReactNode;
}

const AccordionHeader = withParts<AccordionHeaderProps>(
  AccordionPrimitive.Header,
  'header',
);

export interface AccordionTriggerProps extends Assign<
  AccordionPrimitive.Trigger.Props,
  HTMLBendUIProps<'button'>
> {
  children?: React.ReactNode;
}

const AccordionTrigger = withContext(AccordionPrimitive.Trigger, 'trigger', {
  defaultProps: { 'data-part': 'item-trigger' },
});

export interface AccordionItemIndicatorProps extends HTMLBendUIProps<'div'> {
  children?: React.ReactNode;
}

const AccordionIndicator = withContext(
  (props: AccordionItemIndicatorProps) => {
    return (
      <Box {...props}>
        <LucideChevronDown />
      </Box>
    );
  },
  'indicator',
  { defaultProps: { 'data-part': 'item-indicator' } },
);

export interface AccordionPanelProps extends Assign<
  AccordionPrimitive.Panel.Props,
  HTMLBendUIProps<'div'>
> {
  children: React.ReactNode;
}

const AccordionPanel = withContext(AccordionPrimitive.Panel, 'content', {
  defaultProps: { 'data-part': 'item-content' },
});

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
