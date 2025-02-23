import { forwardRef } from 'react';
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui-components/react/scroll-area';
import { scrollArea } from '@particles/styled-system/recipes';

const Root = ScrollAreaPrimitive.Root;
const Viewport = ScrollAreaPrimitive.Viewport;
const Scrollbar = ScrollAreaPrimitive.Scrollbar;
const Thumb = ScrollAreaPrimitive.Thumb;
const Corner = ScrollAreaPrimitive.Corner;

export type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, ScrollAreaProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const ScrollArea = Object.assign(Component, {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
});
