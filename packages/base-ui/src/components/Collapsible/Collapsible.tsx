import { forwardRef } from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui-components/react/collapsible';
import { collapsible } from '@particles/styled-system/recipes';

const Root = CollapsiblePrimitive.Root;
const Trigger = CollapsiblePrimitive.Trigger;
const Panel = CollapsiblePrimitive.Panel;

export type CollapsibleProps = React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Root
>;

const Component = forwardRef<HTMLDivElement, CollapsibleProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Collapsible = Object.assign(Component, {
  Root,
  Trigger,
  Panel,
});
