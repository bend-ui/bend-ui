import { forwardRef } from 'react';
import { Avatar as AvatarPrimitive } from '@ark-ui/react';
import { avatar } from '@particles/styled-system/recipes';
import type { HTMLStyledProps } from '@particles/styled-system/types';
import type { AvatarVariantProps } from '@particles/styled-system/recipes';
import { createStyleContext } from '../../utils';
import type { ComponentProps, ElementRef } from 'react';
import type { AvatarProps } from './Avatar.types';
import type { Assign } from '@ark-ui/react';

const { withProvider, withContext } = createStyleContext(avatar);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, AvatarPrimitive.RootProviderBaseProps>,
    AvatarVariantProps
  >
>(AvatarPrimitive.RootProvider, 'root');

export type RootProps = ComponentProps<typeof Root>;
const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, AvatarPrimitive.RootBaseProps>,
    AvatarVariantProps
  >
>(AvatarPrimitive.Root, 'root');

const Fallback = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, AvatarPrimitive.FallbackBaseProps>
>(AvatarPrimitive.Fallback, 'fallback');

const Image = withContext<
  HTMLImageElement,
  Assign<HTMLStyledProps<'img'>, AvatarPrimitive.ImageBaseProps>
>(AvatarPrimitive.Image, 'image');

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
