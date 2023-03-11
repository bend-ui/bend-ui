import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

const useStyles = createStyles({
  root: {
    base: ['flex', 'gap-4'],
  },
  image: {
    base: [],
  },
  body: {
    base: ['flex-1'],
  },
});

type MediaProps = {
  children?: ReactNode;
};

const Media = forwardRef<MediaProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

type MediaImageProps = {
  children?: ReactNode;
};

const Image = forwardRef<MediaImageProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.image, className)} {...rest}>
      {children}
    </div>
  );
});

type MediaBodyProps = {
  children?: ReactNode;
};

const Body = forwardRef<MediaBodyProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.body, className)} {...rest}>
      {children}
    </div>
  );
});

export default createComponent(Media, { Image, Body }, 'Media');
