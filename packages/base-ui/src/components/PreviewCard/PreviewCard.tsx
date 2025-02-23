import { forwardRef } from 'react';
import { PreviewCard as PreviewCardPrimitive } from '@base-ui-components/react/preview-card';
import { previewCard } from '@particles/styled-system/recipes';

const Root = PreviewCardPrimitive.Root;
const Trigger = PreviewCardPrimitive.Trigger;
const Portal = PreviewCardPrimitive.Portal;
const Backdrop = PreviewCardPrimitive.Backdrop;
const Positioner = PreviewCardPrimitive.Positioner;
const Popup = PreviewCardPrimitive.Popup;
const Arrow = PreviewCardPrimitive.Arrow;

export type PreviewCardProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, PreviewCardProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const PreviewCard = Object.assign(Component, {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Positioner,
  Popup,
  Arrow,
});
