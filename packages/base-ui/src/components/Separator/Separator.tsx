import { forwardRef } from 'react';
import { Separator as SeparatorPrimitive } from '@base-ui-components/react/separator';
import { separator } from '@particles/styled-system/recipes';

const Root = SeparatorPrimitive;

export type SeparatorProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLDivElement, SeparatorProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Separator = Object.assign(Component, {
  Root,
});
