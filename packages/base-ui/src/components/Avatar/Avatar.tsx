import { forwardRef } from 'react';
import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar';
import { avatar, AvatarVariantProps } from '@particles/styled-system/recipes';

export interface AvatarRootProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    AvatarVariantProps {}

const Root = forwardRef<HTMLDivElement, AvatarRootProps>((props, ref) => {
  const { size, ...rest } = props;
  const classes = avatar({ size });
  return <AvatarPrimitive.Root {...rest} ref={ref} className={classes} />;
});

const Image = forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  return <AvatarPrimitive.Image {...props} ref={ref} data-part="image" />;
});

const Fallback = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  return <AvatarPrimitive.Fallback {...props} ref={ref} data-part="fallback" />;
});

export interface AvatarProps extends AvatarRootProps {
  src?: string;
}

const Component = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { src, ...rest } = props;
  return (
    <Root ref={ref} {...rest}>
      <Image src={src} />
      <Fallback />
    </Root>
  );
});

export const Avatar = Object.assign(Component, {
  Root,
  Image,
  Fallback,
});
