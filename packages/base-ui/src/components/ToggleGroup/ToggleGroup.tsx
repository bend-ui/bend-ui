import * as React from 'react';
import { Toggle } from '../Toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { toggleGroup } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(toggleGroup);

const ToggleGroupRoot = withProvider(ToggleGroupPrimitive, 'root');
const ToggleGroupItem = withContext(Toggle.Root, 'item');

const Component = () => {
  return (
    <ToggleGroupRoot defaultValue={['left']}>
      <ToggleGroupItem aria-label="Align left" value="left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align center" value="center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align right" value="right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

function AlignLeftIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentcolor"
      strokeLinecap="round"
      {...props}
    >
      <path d="M2.5 3.5H13.5" />
      <path d="M2.5 9.5H13.5" />
      <path d="M2.5 6.5H10.5" />
      <path d="M2.5 12.5H10.5" />
    </svg>
  );
}

function AlignCenterIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentcolor"
      strokeLinecap="round"
      {...props}
    >
      <path d="M3 3.5H14" />
      <path d="M3 9.5H14" />
      <path d="M4.5 6.5H12.5" />
      <path d="M4.5 12.5H12.5" />
    </svg>
  );
}

function AlignRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentcolor"
      strokeLinecap="round"
      {...props}
    >
      <path d="M2.5 3.5H13.5" />
      <path d="M2.5 9.5H13.5" />
      <path d="M5.5 6.5H13.5" />
      <path d="M5.5 12.5H13.5" />
    </svg>
  );
}

export const ToggleGroup = Object.assign(Component, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
});
