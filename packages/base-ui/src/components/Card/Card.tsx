'use client';
import * as React from 'react';
import type { SlotRecipeComponent } from '@bend-ui/core';

import { createSlotRecipeContext, styled } from '@bend-ui/styled-system/jsx';
import { card } from '@bend-ui/styled-system/recipes';
import {
  contextualSurfaceProps,
  SurfaceScopeProvider,
  useSurfaceScope,
  type SurfaceLevel,
} from '../SurfaceContext/SurfaceContext';

const { withProvider, withContext } = createSlotRecipeContext(card);

const StyledRoot: SlotRecipeComponent<'div', (typeof card)['__type']> =
  withProvider(styled('div'), 'root');
export type CardProps = React.ComponentProps<typeof StyledRoot> & {
  contextual?: boolean;
  surfaceLevel?: SurfaceLevel;
};
const Root = React.forwardRef<HTMLDivElement, CardProps>(function CardRoot(
  { contextual = false, surfaceLevel, ...props },
  ref,
) {
  const enabled = contextual || surfaceLevel !== undefined;
  const scope = useSurfaceScope(surfaceLevel, enabled);
  const surfaceProps = enabled ? contextualSurfaceProps(scope, props) : {};
  return (
    <SurfaceScopeProvider scope={enabled ? scope : null}>
      <StyledRoot
        {...props}
        {...surfaceProps}
        className={
          (surfaceProps.className as string | undefined) ?? props.className
        }
        style={
          (surfaceProps.style as React.CSSProperties | undefined) ?? props.style
        }
        ref={ref}
      />
    </SurfaceScopeProvider>
  );
});
const Header: SlotRecipeComponent<'div'> = withContext(styled('div'), 'header');
const Body: SlotRecipeComponent<'div'> = withContext(styled('div'), 'body');
const Footer: SlotRecipeComponent<'div'> = withContext(styled('div'), 'footer');
const Title: SlotRecipeComponent<'h3'> = withContext(styled('h3'), 'title');
const Description: SlotRecipeComponent<'div'> = withContext(
  styled('div'),
  'description',
);
const Section: SlotRecipeComponent<'div'> = withContext(
  styled('div'),
  'section',
);

export const Card = Object.assign(Root, {
  Root,
  Header,
  Body,
  Footer,
  Title,
  Description,
  Section,
});
