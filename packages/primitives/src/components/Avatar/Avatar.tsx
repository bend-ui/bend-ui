import { createComponent, forwardRef } from '../../utils';
import { useImage } from '../Image';
import type { ReactNode } from 'react';

export interface AvatarRootProps {
  children?: ReactNode;
}

const Root = forwardRef<AvatarRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export interface AvatarImageProps {
  children?: never;
}

const Image = forwardRef<AvatarImageProps, 'img'>((props, ref) => {
  const { children, as: Component = 'img', src, ...rest } = props;

  const { status } = useImage({ src });

  return status === 'loaded' ? (
    <Component ref={ref} src={src} {...rest} />
  ) : null;
});

export interface AvatarFallbackProps {
  children?: ReactNode;
}

const Fallback = forwardRef<AvatarFallbackProps, 'span'>((props, ref) => {
  const { children, as: Component = 'span', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Image, Fallback }, 'Avatar');
