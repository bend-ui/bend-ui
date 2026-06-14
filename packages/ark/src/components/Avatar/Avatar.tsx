import { Avatar as ArkAvatar } from '@ark-ui/react';
import { withParts, withRecipe } from '@bend-ui/react';
import {
  avatar,
  type AvatarVariantProps,
} from '@bend-ui/styled-system/recipes';

export type AvatarRootProps = ArkAvatar.RootProps & AvatarVariantProps;

export const AvatarRoot = withRecipe<AvatarRootProps>(
  ArkAvatar.Root,
  avatar,
  'root',
);

const AvatarFallback = withParts<ArkAvatar.FallbackProps>(
  ArkAvatar.Fallback,
  'fallback',
);
const AvatarImage = withParts<ArkAvatar.ImageProps>(ArkAvatar.Image, 'image');

export interface AvatarProps extends AvatarRootProps {
  fallback?: string;
  src?: string;
}

const Component = (props: AvatarProps) => {
  const { fallback, src, ...rest } = props;
  return (
    <AvatarRoot {...rest}>
      <AvatarFallback>{fallback}</AvatarFallback>
      <AvatarImage src={src} />
    </AvatarRoot>
  );
};

Component.displayName = 'Avatar';

export const Avatar = Object.assign(Component, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
});
