import { forwardRef } from 'react';
import { Avatar as AvatarPrimitive } from '@ark-ui/react';
import { avatar } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { ElementRef } from 'react';
import type { AvatarProps } from './Avatar.types';

const { withProvider, withContext } = createStyleContext(avatar);

export const Root = withProvider(AvatarPrimitive.Root, 'root');

export const Fallback = withContext(AvatarPrimitive.Fallback, 'fallback');

export const Image = withContext(AvatarPrimitive.Image, 'image');

const Component = forwardRef<ElementRef<typeof Root>, AvatarProps>(
  (props, ref) => {
    const { fallback, src, ...rest } = props;
    return (
      <Root ref={ref} {...rest}>
        <Fallback>{fallback}</Fallback>
        <Image alt={fallback} src={src} />
      </Root>
    );
  },
);

Component.displayName = 'Avatar';

export const Avatar = Object.assign(Component, {
  Root,
  Fallback,
  Image,
});
