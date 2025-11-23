import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar';
import { avatar, AvatarVariantProps } from '@particles/styled-system/recipes';
import { withParts, withRecipe } from '@particles/react';

export type AvatarRootProps = AvatarPrimitive.Root.Props & AvatarVariantProps;

const AvatarRoot = withRecipe<AvatarRootProps>(
  AvatarPrimitive.Root,
  avatar,
  'root',
) as unknown as typeof AvatarPrimitive.Root;

const AvatarImage = withParts<AvatarPrimitive.Image.Props>(
  AvatarPrimitive.Image,
  'image',
) as unknown as typeof AvatarPrimitive.Image;

const AvatarFallback = withParts<AvatarPrimitive.Fallback.Props>(
  AvatarPrimitive.Fallback,
  'fallback',
) as unknown as typeof AvatarPrimitive.Fallback;

export interface AvatarProps extends AvatarRootProps {
  src?: string;
}

const Component = (props: AvatarProps) => {
  const { src, ...rest } = props;
  return (
    <AvatarRoot {...rest}>
      <AvatarImage src={src} />
      <AvatarFallback />
    </AvatarRoot>
  );
};

Component.displayName = 'Avatar';

export const Avatar = Object.assign(Component, {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
});
