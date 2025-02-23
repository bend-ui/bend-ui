import { forwardRef } from 'react';
import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar';
import { avatar } from '@particles/styled-system/recipes';

const Root = AvatarPrimitive.Root;
const Image = AvatarPrimitive.Image;
const Fallback = AvatarPrimitive.Fallback;

export type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
>;

const Component = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Avatar = Object.assign(Component, {
  Root,
  Image,
  Fallback,
});
