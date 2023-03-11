import {
  Avatar as AvatarPrimitive,
  createComponent,
  forwardRef,
} from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export type AvatarProps = {
  src: string;
  fallback?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

const useStyles = createStyles({
  root: {
    base: ['overflow-hidden', 'rounded-full'],
    variants: {
      size: {
        sm: ['w-9', 'h-9'],
        md: ['w-12', 'h-12'],
        lg: ['w-16', 'h-16'],
      },
    },
  },
  image: {
    base: ['object-fit-cover', 'w-full', 'h-full'],
  },
  fallback: {
    base: [],
  },
});

const Avatar = forwardRef<AvatarProps, 'div'>((props, ref) => {
  const { className, src, fallback, size = 'md' } = props;
  const { classes, cn } = useStyles({ size });
  return (
    <AvatarPrimitive.Root ref={ref} className={cn(classes.root, className)}>
      <AvatarPrimitive.Image src={src} className={classes.image} />
      {fallback && (
        <AvatarPrimitive.Fallback className={classes.fallback}>
          {fallback}
        </AvatarPrimitive.Fallback>
      )}
    </AvatarPrimitive.Root>
  );
});

export default createComponent(Avatar, {}, 'Avatar');
