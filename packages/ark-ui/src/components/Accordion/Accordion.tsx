import { Accordion as ArkAccordion } from '@ark-ui/react';
import { accordion } from '@bend-ui/styled-system/recipes';
import type { AccordionVariantProps } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(accordion);

export interface AccordionRootProps extends ArkAccordion.RootProps {
  children: React.ReactNode;
  attached?: AccordionVariantProps['attached'];
}

const AccordionRoot = withProvider(ArkAccordion.Root, 'root');
export interface AccordionItemProps extends ArkAccordion.ItemProps {
  children: React.ReactNode;
}

const AccordionItem = withContext(ArkAccordion.Item, 'item');

export interface AccordionItemTriggerProps
  extends ArkAccordion.ItemTriggerProps {
  children: React.ReactNode;
}

const AccordionItemTrigger = withContext(ArkAccordion.ItemTrigger, 'trigger');

export interface AccordionItemIndicatorProps
  extends ArkAccordion.ItemIndicatorProps {
  children: React.ReactNode;
}

const AccordionItemIndicator = withContext(
  ArkAccordion.ItemIndicator,
  'indicator',
);

export interface AccordionItemContentProps
  extends ArkAccordion.ItemContentProps {
  children: React.ReactNode;
}

const AccordionItemContent = withContext(ArkAccordion.ItemContent, 'content');

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionItemTrigger,
  ItemIndicator: AccordionItemIndicator,
  ItemContent: AccordionItemContent,
});
