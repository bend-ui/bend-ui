import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import { avatar, AvatarVariantProps } from '@bend-ui/styled-system/recipes';
import { withParts, withRecipe } from '@bend-ui/react/factory';
import type { ReactNode } from 'react';

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
  alt?: string;
  fallback?: ReactNode;
  shape?: 'circle' | 'square';
  src?: string;
}

const Component = (props: AvatarProps) => {
  const { alt = '', fallback, shape = 'circle', src, style, ...rest } = props;
  return (
    <AvatarRoot
      style={{
        borderRadius: shape === 'circle' ? '9999px' : '8px',
        ...style,
      }}
      {...rest}
    >
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarRoot>
  );
};

Component.displayName = 'Avatar';

export const Avatar = Object.assign(Component, {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
});
