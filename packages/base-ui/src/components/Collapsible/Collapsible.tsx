import * as React from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { collapsible } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(collapsible);

const CollapsibleRoot = withProvider(CollapsiblePrimitive.Root, 'root');
const CollapsibleTrigger = withContext(CollapsiblePrimitive.Trigger, 'trigger');
const CollapsiblePanel = withContext(CollapsiblePrimitive.Panel, 'content');

const Component = () => {
  return (
    <CollapsibleRoot>
      <CollapsibleTrigger>
        <ChevronIcon />
        Recovery keys
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div>
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </CollapsibleRoot>
  );
};

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
