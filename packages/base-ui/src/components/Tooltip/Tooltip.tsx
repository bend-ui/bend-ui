import * as React from 'react';
import {
  contextualSurfaceProps,
  SurfaceScopeProvider,
  useSurfaceScope,
  type SurfaceLevel,
} from '../SurfaceContext/SurfaceContext';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import { createSlotRecipeContext } from '@bend-ui/styled-system/jsx';
import { tooltip } from '@bend-ui/styled-system/recipes';

const TooltipProvider = TooltipPrimitive.Provider;
const { withRootProvider, withContext } = createSlotRecipeContext(tooltip);
const TooltipRoot = withRootProvider(TooltipPrimitive.Root) as <Payload>(
  props: TooltipPrimitive.Root.Props<Payload>,
) => React.ReactElement;
const TooltipTrigger = withContext(
  TooltipPrimitive.Trigger,
  'trigger',
) as typeof TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;
const TooltipPositioner = TooltipPrimitive.Positioner;
export type TooltipPopupProps = TooltipPrimitive.Popup.Props & {
  surfaceLevel?: SurfaceLevel;
};
const TooltipPopupBridge = React.forwardRef<
  HTMLDivElement,
  TooltipPrimitive.Popup.Props & {
    surfaceClassName?: TooltipPrimitive.Popup.Props['className'];
    surfaceStyle?: TooltipPrimitive.Popup.Props['style'];
  }
>(function TooltipPopupBridge(
  { surfaceClassName, surfaceStyle, className, ...props },
  ref,
) {
  return (
    <TooltipPrimitive.Popup
      {...props}
      ref={ref}
      className={
        typeof surfaceClassName === 'function'
          ? (state) =>
              [
                typeof className === 'function' ? className(state) : className,
                surfaceClassName(state),
              ]
                .filter(Boolean)
                .join(' ')
          : className
      }
      style={surfaceStyle ?? props.style}
    />
  );
});
const StyledTooltipPopup = withContext(TooltipPopupBridge, 'content');
const TooltipPopup = React.forwardRef<HTMLDivElement, TooltipPopupProps>(
  function TooltipPopup({ surfaceLevel, ...props }, ref) {
    const scope = useSurfaceScope(surfaceLevel);
    const merged = {
      ...props,
      ...contextualSurfaceProps<TooltipPrimitive.Popup.State>(scope, props),
    };
    return (
      <SurfaceScopeProvider scope={scope}>
        <StyledTooltipPopup
          {...merged}
          className={
            typeof merged.className === 'function'
              ? undefined
              : merged.className
          }
          style={typeof merged.style === 'function' ? undefined : merged.style}
          surfaceClassName={
            typeof merged.className === 'function'
              ? merged.className
              : undefined
          }
          surfaceStyle={
            typeof merged.style === 'function' ? merged.style : undefined
          }
          ref={ref}
        />
      </SurfaceScopeProvider>
    );
  },
);
const TooltipArrow = withContext(TooltipPrimitive.Arrow, 'arrow');

const Component = TooltipRoot;

export const Tooltip = Object.assign(Component, {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
});
