import type { ComponentProps } from 'react';
import { Toolbar as ToolbarPrimitive } from '@base-ui/react/toolbar';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { toolbar } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createSlotRecipeContext(toolbar);

const ToolbarRoot = withProvider(ToolbarPrimitive.Root, 'root');
const ToolbarGroup = ToolbarPrimitive.Group;
const ToolbarSeparator = withContext(ToolbarPrimitive.Separator, 'separator');
const ToolbarButton = ToolbarPrimitive.Button;
const ToolbarLink = ToolbarPrimitive.Link;

export type ToolbarProps = ComponentProps<typeof ToolbarRoot>;

export const Toolbar = Object.assign(ToolbarRoot, {
  Root: ToolbarRoot,
  Group: ToolbarGroup,
  Separator: ToolbarSeparator,
  Button: ToolbarButton,
  Link: ToolbarLink,
});
