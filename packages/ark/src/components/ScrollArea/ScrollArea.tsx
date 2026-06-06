'use client';
import { ScrollArea as ScrollAreaPrimitive } from '@ark-ui/react/scroll-area';
import type { ComponentProps } from 'react';
import { createStyleContext } from '@particles/styled-system/jsx';
import { scrollArea } from '@particles/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(scrollArea);

export type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaRoot>;
export type ScrollAreaContentProps = ComponentProps<typeof ScrollAreaContent>;

export const ScrollAreaRoot = withProvider(ScrollAreaPrimitive.Root, 'root');
export const ScrollAreaRootProvider = withProvider(
  ScrollAreaPrimitive.Root,
  'root',
);
export const ScrollAreaContent = withContext(
  ScrollAreaPrimitive.Content,
  'content',
);
export const ScrollAreaCorner = withContext(
  ScrollAreaPrimitive.Corner,
  'corner',
);
export const ScrollAreaThumb = withContext(ScrollAreaPrimitive.Thumb, 'thumb');
export const ScrollAreaScrollbar = withContext(
  ScrollAreaPrimitive.Scrollbar,
  'scrollbar',
  {
    defaultProps: { children: <ScrollAreaThumb /> },
  },
);
export const ScrollAreaViewport = withContext(
  ScrollAreaPrimitive.Viewport,
  'viewport',
);

export interface ScrollAreaProps extends ComponentProps<typeof ScrollAreaRoot> {
  children: React.ReactNode;
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
  RootProvider: ScrollAreaRootProvider,
  Content: ScrollAreaContent,
  Corner: ScrollAreaCorner,
  Thumb: ScrollAreaThumb,
  Scrollbar: ScrollAreaScrollbar,
  Viewport: ScrollAreaViewport,
  Context: ScrollAreaPrimitive.Context,
});
