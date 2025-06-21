import { forwardRef } from 'react';
import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar';
import { avatar, AvatarVariantProps } from '@particles/styled-system/recipes';

export type AvatarRootProps = AvatarPrimitive.Root.Props & AvatarVariantProps;

const AvatarRoot = forwardRef<HTMLDivElement, AvatarRootProps>((props, ref) => {
  const { size, ...rest } = props;
  const classes = avatar({ size });
  return <AvatarPrimitive.Root {...rest} ref={ref} className={classes} />;
});

const AvatarImage = forwardRef<HTMLImageElement, AvatarPrimitive.Image.Props>(
  (props, ref) => {
    return <AvatarPrimitive.Image {...props} ref={ref} data-part="image" />;
  },
);

const AvatarFallback = forwardRef<
  HTMLDivElement,
  AvatarPrimitive.Fallback.Props
>((props, ref) => {
  return <AvatarPrimitive.Fallback {...props} ref={ref} data-part="fallback" />;
});

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
