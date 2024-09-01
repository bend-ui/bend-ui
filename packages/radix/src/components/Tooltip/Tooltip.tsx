import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled } from '@particles/styled-system/jsx';
import { tooltip } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(tooltip);

export const TooltipProvider = TooltipPrimitive.Provider;

const Root = withProvider(styled(TooltipPrimitive.Root), 'root');

const Trigger = withContext(styled(TooltipPrimitive.Trigger), 'trigger');

const Content = withContext(styled(TooltipPrimitive.Content), 'content');

export const Tooltip = Object.assign(Root, { Trigger, Content });
