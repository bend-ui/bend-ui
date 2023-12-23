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

interface MediaProps {
  children?: ReactNode;
}

const Media = forwardRef<'div', MediaProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

interface MediaImageProps {
  children?: ReactNode;
}

const Image = forwardRef<'div', MediaImageProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.image, className)} {...rest}>
      {children}
    </div>
  );
});

interface MediaBodyProps {
  children?: ReactNode;
}

const Body = forwardRef<'div', MediaBodyProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.body, className)} {...rest}>
      {children}
    </div>
  );
});

export default createComponent(Media, { Image, Body });
