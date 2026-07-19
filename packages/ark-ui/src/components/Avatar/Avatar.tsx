import { Avatar as ArkAvatar } from '@ark-ui/react';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import {
  avatar,
  type AvatarVariantProps,
} from '@bend-ui/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(avatar);

export type AvatarRootProps = ArkAvatar.RootProps & AvatarVariantProps;

export const AvatarRoot = withProvider(ArkAvatar.Root, 'root');

const AvatarFallback = withContext(ArkAvatar.Fallback, 'fallback');
const AvatarImage = withContext(ArkAvatar.Image, 'image');

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
