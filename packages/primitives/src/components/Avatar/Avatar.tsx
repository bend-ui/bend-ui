import { createComponent, forwardRef } from '../../utils';
import type { ReactNode } from 'react';

export type AvatarRootProps = {
  children?: ReactNode;
};

const Root = forwardRef<AvatarRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export type AvatarImageProps = {
  children?: never;
};

const Image = forwardRef<AvatarImageProps, 'img'>((props, ref) => {
  const { children, as: Component = 'img', ...rest } = props;
  return <Component ref={ref} {...rest} />;
});

export type AvatarFallbackProps = {
  children?: ReactNode;
};

const Fallback = forwardRef<AvatarFallbackProps, 'span'>((props, ref) => {
  const { children, as: Component = 'span', ...rest } = props;
  return <Component ref={ref} {...rest} />;
});

export default createComponent(Root, { Root, Image, Fallback }, 'Avatar');
