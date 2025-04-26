import { Avatar as ArkAvatar } from '@ark-ui/react';
import {
  avatar,
  type AvatarVariantProps,
} from '@particles/styled-system/recipes';
import { forwardRef } from 'react';

export type AvatarRootProps = ArkAvatar.RootProps & AvatarVariantProps;

export const AvatarRoot = forwardRef<HTMLDivElement, AvatarRootProps>(
  (props, ref) => {
    const [variantProps, rest] = avatar.splitVariantProps(props);
    const classes = avatar(variantProps);
    return <ArkAvatar.Root {...rest} ref={ref} className={classes} />;
  },
);

const AvatarFallback = ArkAvatar.Fallback;
const AvatarImage = ArkAvatar.Image;

export interface AvatarProps extends AvatarRootProps {
  fallback?: string;
  src?: string;
}

const Component = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { fallback, src, ...rest } = props;
  return (
    <AvatarRoot {...rest} ref={ref}>
      <AvatarFallback>{fallback}</AvatarFallback>
      <AvatarImage src={src} />
    </AvatarRoot>
  );
});
Component.displayName = 'Avatar';

export const Avatar = Object.assign(Component, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
});
