import { Avatar as AvatarPrimitive } from '@ark-ui/react';
import {
  avatar,
  type AvatarVariantProps,
} from '@particles/styled-system/recipes';
import type { HTMLStyledProps } from '@particles/styled-system/types';
import { withRecipe } from '../../utils';
import type { AvatarProps } from './Avatar.types';
import type { Assign } from '@ark-ui/react';

export const AvatarRoot = withRecipe<
  Assign<
    Assign<HTMLStyledProps<'div'>, AvatarPrimitive.RootBaseProps>,
    AvatarVariantProps
  >
>(AvatarPrimitive.Root, avatar);

export const AvatarRootProvider = withRecipe<
  Assign<
    Assign<HTMLStyledProps<'div'>, AvatarPrimitive.RootProviderBaseProps>,
    AvatarVariantProps
  >
>(AvatarPrimitive.RootProvider, avatar);

const AvatarFallback = AvatarPrimitive.Fallback;
const AvatarImage = AvatarPrimitive.Image;

const Component = (props: AvatarProps) => {
  const { fallback, src, ...rest } = props;
  return (
    <AvatarRoot {...rest}>
      <AvatarFallback>{fallback}</AvatarFallback>
      <AvatarImage alt={fallback} src={src} />
    </AvatarRoot>
  );
};
Component.displayName = 'Avatar';

export const Avatar = Object.assign(Component, {
  RootProvider: AvatarRootProvider,
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
});
