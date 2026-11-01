import * as React from 'react';
import {
  contextualSurfaceProps,
  SurfaceScopeProvider,
  useSurfaceScope,
  type SurfaceLevel,
} from '../SurfaceContext/SurfaceContext';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import {
  dialog,
  DialogVariantProps,
  backdrop,
} from '@bend-ui/styled-system/recipes';
import { withParts, withRecipe } from '@bend-ui/core';
import {
  createSlotRecipeContext,
  type HTMLStyledProps,
} from '@bend-ui/styled-system/jsx';
import { Button, type ButtonProps } from '../Button';
import type { HTMLBendUIProps } from '@bend-ui/core';
import { Assign } from '@bend-ui/styled-system/types';

export interface DialogRootProps
  extends DialogPrimitive.Root.Props, DialogVariantProps {}

const { withRootProvider, withContext } = createSlotRecipeContext(dialog);
const DialogRoot = withRootProvider(DialogPrimitive.Root);

export type DialogTriggerProps = Assign<
  ButtonProps,
  DialogPrimitive.Trigger.Props
>;

const DialogTrigger = withParts<DialogTriggerProps>(
  DialogPrimitive.Trigger,
  'trigger',
  {
    render: (props) => <Button {...props} />,
  },
);

export type DialogPortalProps = DialogPrimitive.Portal.Props;

const DialogPortal = DialogPrimitive.Portal;

export type DialogBackdropProps = DialogPrimitive.Backdrop.Props;

const DialogBackdrop = withRecipe<DialogBackdropProps>(
  DialogPrimitive.Backdrop,
  backdrop,
  'backdrop',
);

export type DialogPositionerProps = HTMLBendUIProps<'div'>;

const DialogPositioner = withContext('div', 'positioner');

export type DialogPopupProps = Assign<
  HTMLStyledProps<'div'>,
  DialogPrimitive.Popup.Props
> & {
  surfaceLevel?: SurfaceLevel;
};

// Keep state callbacks outside Panda's string-based class merging.
const DialogPopupBridge = React.forwardRef<
  HTMLDivElement,
  DialogPopupProps & {
    surfaceClassName?: DialogPrimitive.Popup.Props['className'];
    surfaceStyle?: DialogPrimitive.Popup.Props['style'];
  }
>(function DialogPopupBridge(
  { surfaceClassName, surfaceStyle, className, ...props },
  ref,
) {
  return (
    <DialogPrimitive.Popup
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
const StyledDialogPopup = withContext(DialogPopupBridge, 'content');

const DialogPopup = React.forwardRef<HTMLDivElement, DialogPopupProps>(
  function DialogPopup({ surfaceLevel, ...props }, ref) {
    const scope = useSurfaceScope(surfaceLevel);
    const merged = {
      ...props,
      ...contextualSurfaceProps<DialogPrimitive.Popup.State>(scope, props),
    };
    return (
      <SurfaceScopeProvider scope={scope}>
        <StyledDialogPopup
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

export type DialogTitleProps = DialogPrimitive.Title.Props;

const DialogTitle = withContext(DialogPrimitive.Title, 'title');

export type DialogDescriptionProps = DialogPrimitive.Description.Props;

const DialogDescription = withContext(
  DialogPrimitive.Description,
  'description',
);

export type DialogCloseProps = DialogPrimitive.Close.Props;

const DialogClose = withContext(DialogPrimitive.Close, 'closeTrigger');

export interface DialogProps extends DialogRootProps {
  title?: string;
  description?: string;
}

const Component = (props: DialogProps) => {
  return <DialogRoot {...props} />;
};

export const Dialog = Object.assign(Component, {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Positioner: DialogPositioner,
  Backdrop: DialogBackdrop,
  Popup: DialogPopup,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});
