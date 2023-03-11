import { createComponent, forwardRef } from '../../utils';
import type { ComponentPropsWithoutRef } from 'react';

type MediaRootProps = ComponentPropsWithoutRef<'div'>;

const Root = forwardRef<MediaRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

type MediaImageProps = ComponentPropsWithoutRef<'div'>;

const Image = forwardRef<MediaImageProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

type MediaBodyProps = ComponentPropsWithoutRef<'div'>;

const Body = forwardRef<MediaBodyProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Image, Body }, 'Media');
