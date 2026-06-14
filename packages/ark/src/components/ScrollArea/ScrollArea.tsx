'use client';
import { ScrollArea as ScrollAreaPrimitive } from '@ark-ui/react/scroll-area';
import type { ComponentProps } from 'react';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import { scrollArea } from '@bend-ui/styled-system/recipes';

const { withProvider, withContext, withRootProvider } =
  createStyleContext(scrollArea);

const ScrollAreaRoot = withProvider(ScrollAreaPrimitive.Root, 'root');
const ScrollAreaRootProvider = withRootProvider(
  ScrollAreaPrimitive.RootProvider,
);
const ScrollAreaContent = withContext(ScrollAreaPrimitive.Content, 'content');
const ScrollAreaCorner = withContext(ScrollAreaPrimitive.Corner, 'corner');
const ScrollAreaThumb = withContext(ScrollAreaPrimitive.Thumb, 'thumb');
const ScrollAreaScrollbar = withContext(
  ScrollAreaPrimitive.Scrollbar,
  'scrollbar',
  {
    defaultProps: { children: <ScrollAreaThumb /> },
  },
);
const ScrollAreaViewport = withContext(
  ScrollAreaPrimitive.Viewport,
  'viewport',
);

export type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaRoot>;
export type ScrollAreaRootProviderProps = ComponentProps<
  typeof ScrollAreaRootProvider
>;
export type ScrollAreaContentProps = ComponentProps<typeof ScrollAreaContent>;
export type ScrollAreaCornerProps = ComponentProps<typeof ScrollAreaCorner>;
export type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaThumb>;
export type ScrollAreaScrollbarProps = ComponentProps<
  typeof ScrollAreaScrollbar
>;
export type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaViewport>;

export interface ScrollAreaProps extends ScrollAreaRootProps {
  children?: React.ReactNode;
}

const Component = (props: ScrollAreaProps) => {
  const { children, ...rest } = props;
  return (
    <ScrollAreaRoot {...rest}>
      <ScrollAreaViewport>
        <ScrollAreaContent>{children}</ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar />
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};

export const ScrollArea = Object.assign(Component, {
  Root: ScrollAreaRoot,
  RootProvider: ScrollAreaRootProvider,
  Content: ScrollAreaContent,
  Corner: ScrollAreaCorner,
  Thumb: ScrollAreaThumb,
  Scrollbar: ScrollAreaScrollbar,
  Viewport: ScrollAreaViewport,
  Context: ScrollAreaPrimitive.Context,
});
