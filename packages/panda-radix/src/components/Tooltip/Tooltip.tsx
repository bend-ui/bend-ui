import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled } from '@particles/panda-system/jsx';
import { tooltip } from '@particles/panda-system/recipes';
import { createComponent } from '@particles/primitives';
import { createStyleContext } from '../../utils';

const { withProvider, withContext } = createStyleContext(tooltip);

export const TooltipProvider = TooltipPrimitive.Provider;

const Root = withProvider(styled(TooltipPrimitive.Root), 'root');

const Trigger = withContext(styled(TooltipPrimitive.Trigger), 'trigger');

const Content = withContext(styled(TooltipPrimitive.Content), 'content', {
  sideOffset: 4,
});

export const Tooltip = createComponent(Root, { Trigger, Content });
