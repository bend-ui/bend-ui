import { Tooltip as TooltipPrimitive } from 'radix-ui';
import { styled } from '@particles/styled-system/jsx';
import { tooltip } from '@particles/styled-system/recipes';
import { createRecipeContext } from '../../utils/recipe-context';

const { withProvider, withPart } = createRecipeContext(tooltip);

export const TooltipProvider = TooltipPrimitive.Provider;

const Root = withProvider(styled(TooltipPrimitive.Root), 'root');

const Trigger = withPart(styled(TooltipPrimitive.Trigger), 'trigger');

const Content = withPart(styled(TooltipPrimitive.Content), 'content');

export const Tooltip = Object.assign(Root, { Trigger, Content });
