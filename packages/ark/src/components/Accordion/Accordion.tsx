import { Accordion as ArkAccordion } from '@ark-ui/react';
import { accordion } from '@particles/styled-system/recipes';
import type { AccordionVariantProps } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';

export type AccordionRootProps = ArkAccordion.RootProps & AccordionVariantProps;

const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootProps>(
  (props, ref) => {
    const [variantProps, rest] = accordion.splitVariantProps(props);
    const classes = accordion(variantProps);
    return <ArkAccordion.Root {...rest} ref={ref} className={classes} />;
  },
);

const AccordionItem = ArkAccordion.Item;

const AccordionItemTrigger = ArkAccordion.ItemTrigger;

const AccordionItemIndicator = ArkAccordion.ItemIndicator;

const AccordionItemContent = ArkAccordion.ItemContent;

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionItemTrigger,
  ItemIndicator: AccordionItemIndicator,
  ItemContent: AccordionItemContent,
});
