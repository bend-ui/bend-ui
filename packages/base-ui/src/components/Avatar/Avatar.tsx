import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import { avatar, AvatarVariantProps } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';
import type { ComponentType } from 'react';
import type { ReactNode } from 'react';

export type AvatarRootProps = AvatarPrimitive.Root.Props & AvatarVariantProps;

const { withProvider, withContext } = createStyleContext(avatar);

const AvatarRoot = withProvider(
  AvatarPrimitive.Root,
  'root',
) as unknown as ComponentType<AvatarRootProps>;

const AvatarImage = withContext(
  AvatarPrimitive.Image,
  'image',
) as unknown as typeof AvatarPrimitive.Image;

const AvatarFallback = withContext(
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
