import React from 'react';

type MediaRootProps = React.ComponentPropsWithoutRef<'div'>;

const Root = React.forwardRef<HTMLDivElement, MediaRootProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

type MediaImageProps = React.ComponentPropsWithoutRef<'div'>;

const Image = React.forwardRef<HTMLDivElement, MediaImageProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);

type MediaBodyProps = React.ComponentPropsWithoutRef<'div'>;

const Body = React.forwardRef<HTMLDivElement, MediaBodyProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

export const Media = Object.assign(Root, { Image, Body });
