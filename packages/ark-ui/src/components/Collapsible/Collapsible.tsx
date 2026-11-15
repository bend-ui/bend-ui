import { Collapsible as CollapsiblePrimitive } from '@ark-ui/react';

export const Collapsible = Object.assign(CollapsiblePrimitive.Root, {
  Root: CollapsiblePrimitive.Root,
  Trigger: CollapsiblePrimitive.Trigger,
  Content: CollapsiblePrimitive.Content,
});
