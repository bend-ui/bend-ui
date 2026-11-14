import * as React from 'react';
import {
  contextualSurfaceProps,
  SurfaceScopeProvider,
  useSurfaceScope,
  type SurfaceLevel,
} from '../SurfaceContext/SurfaceContext';
import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import { popover } from '@bend-ui/styled-system/recipes';
import {
  createSlotRecipeContext,
  type HTMLStyledProps,
} from '@bend-ui/styled-system/jsx';
import { Button } from '../Button';
import type { Assign } from '@bend-ui/styled-system/types';

const { withRootProvider, withContext } = createSlotRecipeContext(popover);
const PopoverRoot = withRootProvider(PopoverPrimitive.Root) as <Payload>(
  props: PopoverPrimitive.Root.Props<Payload>,
) => React.ReactElement;
export type PopoverTriggerProps<Payload = unknown> =
  PopoverPrimitive.Trigger.Props<Payload>;
const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function PopoverTrigger({ render, ...props }, ref) {
    return (
      <PopoverPrimitive.Trigger
        render={render ?? <Button />}
        {...props}
        ref={ref}
      />
    );
  },
) as <Payload>(
  props: PopoverTriggerProps<Payload> & React.RefAttributes<HTMLElement>,
) => React.ReactElement;
const PopoverPortal = PopoverPrimitive.Portal;

export type PopoverPositionerProps = PopoverPrimitive.Positioner.Props;

const PopoverPositioner = PopoverPrimitive.Positioner;

export type PopoverPopupProps = Assign<
  HTMLStyledProps<'div'>,
  PopoverPrimitive.Popup.Props
> & {
  surfaceLevel?: SurfaceLevel;
};

// Keep state callbacks outside Panda's string-based class merging.
const PopoverPopupBridge = React.forwardRef<
  HTMLDivElement,
  PopoverPopupProps & {
    surfaceClassName?: PopoverPrimitive.Popup.Props['className'];
    surfaceStyle?: PopoverPrimitive.Popup.Props['style'];
  }
>(function PopoverPopupBridge(
  { surfaceClassName, surfaceStyle, className, ...props },
  ref,
) {
  return (
    <PopoverPrimitive.Popup
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
const StyledPopoverPopup = withContext(PopoverPopupBridge, 'content');

const PopoverPopup = React.forwardRef<HTMLDivElement, PopoverPopupProps>(
  function PopoverPopup({ surfaceLevel, ...props }, ref) {
    const scope = useSurfaceScope(surfaceLevel);
    const merged = {
      ...props,
      ...contextualSurfaceProps<PopoverPrimitive.Popup.State>(scope, props),
    };
    return (
      <SurfaceScopeProvider scope={scope}>
        <StyledPopoverPopup
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

export type PopoverArrowProps = PopoverPrimitive.Arrow.Props;

const PopoverArrow = withContext(PopoverPrimitive.Arrow, 'arrow');

export type PopoverTitleProps = PopoverPrimitive.Title.Props;

const PopoverTitle = withContext(PopoverPrimitive.Title, 'title');

export type PopoverDescriptionProps = PopoverPrimitive.Description.Props;

const PopoverDescription = withContext(
  PopoverPrimitive.Description,
  'description',
);

export type PopoverCloseProps = PopoverPrimitive.Close.Props;

const PopoverClose = withContext(PopoverPrimitive.Close, 'closeTrigger');

export interface PopoverContentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const PopoverContent = (props: PopoverContentProps) => {
  const { title, description, children } = props;
  return (
    <PopoverPortal>
      <PopoverPositioner sideOffset={8}>
        <PopoverPopup>
          <PopoverArrow>
            <ArrowSvg />
          </PopoverArrow>
          {title && <PopoverTitle>{title}</PopoverTitle>}
          {description != null && (
            <PopoverDescription>{description}</PopoverDescription>
          )}
          {children}
        </PopoverPopup>
      </PopoverPositioner>
    </PopoverPortal>
  );
};

export interface PopoverProps extends PopoverPrimitive.Root.Props {
  trigger?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const Component = (props: PopoverProps) => {
  const { title, description, children, trigger, ...rest } = props;
  return (
    <PopoverRoot {...rest}>
      {trigger && <PopoverTrigger>{trigger}</PopoverTrigger>}
      {title || description ? (
        <PopoverContent title={title} description={description}>
          {children}
        </PopoverContent>
      ) : (
        children
      )}
    </PopoverRoot>
  );
};

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z" />
      <path d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z" />
      <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
    </svg>
  );
}

export const Popover = Object.assign(Component, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Arrow: PopoverArrow,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
  Content: PopoverContent,
});
