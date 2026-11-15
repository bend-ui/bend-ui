import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { collapsible } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(collapsible);

const CollapsibleRoot = withProvider(CollapsiblePrimitive.Root, 'root');
const CollapsibleTrigger = withContext(CollapsiblePrimitive.Trigger, 'trigger');
const CollapsiblePanel = withContext(CollapsiblePrimitive.Panel, 'content');

export interface CollapsibleProps
  extends Omit<ComponentProps<typeof CollapsibleRoot>, 'children'> {
  /** Content of the trigger button, shown after the chevron. */
  trigger: ReactNode;
  /** Content of the panel. */
  children?: ReactNode;
}

/** A trigger with a chevron that reveals its children; use the parts for custom layouts. */
const Component = (props: CollapsibleProps) => {
  const { trigger, children, ...rest } = props;
  return (
    <CollapsibleRoot {...rest}>
      <CollapsibleTrigger>
        <ChevronIcon aria-hidden="true" />
        {trigger}
      </CollapsibleTrigger>
      <CollapsiblePanel>{children}</CollapsiblePanel>
    </CollapsibleRoot>
  );
};

Object.assign(Component, { displayName: 'Collapsible' });

export function ChevronIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
    </svg>
  );
}

export const Collapsible = Object.assign(Component, {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
});
