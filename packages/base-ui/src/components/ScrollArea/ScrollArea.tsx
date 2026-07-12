import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { scrollArea } from '@bend-ui/styled-system/recipes';
import * as React from 'react';
import type { ComponentProps } from 'react';

const { withProvider, withContext } = createStyleContext(scrollArea);

const ScrollAreaRoot = withProvider(ScrollAreaPrimitive.Root, 'root');
const ScrollAreaViewport = withContext(
  ScrollAreaPrimitive.Viewport,
  'viewport',
);
const ScrollAreaContent = withContext(ScrollAreaPrimitive.Content, 'content');
const ScrollAreaScrollbar = withContext(
  ScrollAreaPrimitive.Scrollbar,
  'scrollbar',
);
const ScrollAreaThumb = withContext(ScrollAreaPrimitive.Thumb, 'thumb');
const ScrollAreaCorner = withContext(ScrollAreaPrimitive.Corner, 'corner');

export interface ScrollAreaProps extends ComponentProps<typeof ScrollAreaRoot> {
  children?: React.ReactNode;
}

const Component = (props: ScrollAreaProps) => {
  const { children, ...rest } = props;
  return (
    <ScrollAreaRoot {...rest}>
      <ScrollAreaViewport>
        <ScrollAreaContent>{children}</ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};

export const ScrollArea = Object.assign(Component, {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
});
