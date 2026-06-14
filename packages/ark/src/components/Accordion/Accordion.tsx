import { Accordion as ArkAccordion } from '@ark-ui/react';
import { accordion } from '@bend-ui/styled-system/recipes';
import type { AccordionVariantProps } from '@bend-ui/styled-system/recipes';
import { withParts, withRecipe } from '@bend-ui/react';

export interface AccordionRootProps extends ArkAccordion.RootProps {
  children: React.ReactNode;
  attached?: AccordionVariantProps['attached'];
}

const AccordionRoot = withRecipe<AccordionRootProps>(
  ArkAccordion.Root,
  accordion,
  'root',
);
export interface AccordionItemProps extends ArkAccordion.ItemProps {
  children: React.ReactNode;
}

const AccordionItem = withParts<AccordionItemProps>(ArkAccordion.Item, 'item');

export interface AccordionItemTriggerProps
  extends ArkAccordion.ItemTriggerProps {
  children: React.ReactNode;
}

const AccordionItemTrigger = withParts<AccordionItemTriggerProps>(
  ArkAccordion.ItemTrigger,
  'item-trigger',
);

export interface AccordionItemIndicatorProps
  extends ArkAccordion.ItemIndicatorProps {
  children: React.ReactNode;
}

const AccordionItemIndicator = withParts<AccordionItemIndicatorProps>(
  ArkAccordion.ItemIndicator,
  'item-indicator',
);

export interface AccordionItemContentProps
  extends ArkAccordion.ItemContentProps {
  children: React.ReactNode;
}

const AccordionItemContent = withParts<AccordionItemContentProps>(
  ArkAccordion.ItemContent,
  'item-content',
);

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionItemTrigger,
  ItemIndicator: AccordionItemIndicator,
  ItemContent: AccordionItemContent,
});
