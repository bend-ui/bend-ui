import { Accordion as AccordionPrimitive } from '@ark-ui/react';
import { accordion } from '@particles/styled-system/recipes';
import type { HTMLStyledProps } from '@particles/styled-system/types';
import type { AccordionVariantProps } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { Assign } from '@ark-ui/react';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(accordion);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, AccordionPrimitive.RootProviderBaseProps>,
    AccordionVariantProps
  >
>(AccordionPrimitive.RootProvider, 'root');

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, AccordionPrimitive.RootBaseProps>,
    AccordionVariantProps
  >
>(AccordionPrimitive.Root, 'root');

export const ItemContent = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, AccordionPrimitive.ItemContentBaseProps>
>(AccordionPrimitive.ItemContent, 'content');

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, AccordionPrimitive.ItemIndicatorBaseProps>
>(AccordionPrimitive.ItemIndicator, 'indicator');

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, AccordionPrimitive.ItemBaseProps>
>(AccordionPrimitive.Item, 'item');

export const ItemTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, AccordionPrimitive.ItemTriggerBaseProps>
>(AccordionPrimitive.ItemTrigger, 'trigger');

export const Accordion = Object.assign(Root, {
  Root,
  Item,
  ItemTrigger,
  ItemIndicator,
  ItemContent,
});
