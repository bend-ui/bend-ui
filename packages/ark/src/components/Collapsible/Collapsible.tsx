import { Collapsible as CollapsiblePrimitive } from '@ark-ui/react';

const Component = () => (
  <CollapsiblePrimitive.Root>
    <CollapsiblePrimitive.Trigger>Toggle</CollapsiblePrimitive.Trigger>
    <CollapsiblePrimitive.Content>Content</CollapsiblePrimitive.Content>
  </CollapsiblePrimitive.Root>
);

export const Collapsible = Object.assign(Component, {
  Root: CollapsiblePrimitive.Root,
  Trigger: CollapsiblePrimitive.Trigger,
  Content: CollapsiblePrimitive.Content,
});
