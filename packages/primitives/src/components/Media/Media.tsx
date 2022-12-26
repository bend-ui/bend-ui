import { ComponentPropsWithoutRef, forwardRef } from 'react';

type MediaRootProps = ComponentPropsWithoutRef<'div'>;

const Root = forwardRef<HTMLDivElement, MediaRootProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

type MediaImageProps = ComponentPropsWithoutRef<'div'>;

const Image = forwardRef<HTMLDivElement, MediaImageProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

type MediaBodyProps = ComponentPropsWithoutRef<'div'>;

const Body = forwardRef<HTMLDivElement, MediaBodyProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

export const Media = Object.assign(Root, { Image, Body });
