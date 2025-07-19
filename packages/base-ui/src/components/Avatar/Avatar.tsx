import { forwardRef } from 'react';
import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar';
import { avatar, AvatarVariantProps } from '@particles/styled-system/recipes';
import { withParts, withRecipe } from '../../utils/with-recipe';

export type AvatarRootProps = AvatarPrimitive.Root.Props & AvatarVariantProps;

const AvatarRoot = withRecipe<AvatarRootProps>(
  AvatarPrimitive.Root,
  avatar,
  'root',
);

const AvatarImage = withParts<AvatarPrimitive.Image.Props>(
  AvatarPrimitive.Image,
  'image',
);

const AvatarFallback = withParts<AvatarPrimitive.Fallback.Props>(
  AvatarPrimitive.Fallback,
  'fallback',
);

export interface AvatarProps extends AvatarRootProps {
  src?: string;
}

const Component = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { src, ...rest } = props;
  return (
    <AvatarRoot ref={ref} {...rest}>
      <AvatarImage src={src} />
      <AvatarFallback />
    </AvatarRoot>
  );
});

export const Avatar = Object.assign(Component, {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
});
