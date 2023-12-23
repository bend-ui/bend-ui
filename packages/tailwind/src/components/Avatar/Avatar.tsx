import {
  Avatar as AvatarPrimitive,
  createComponent,
  forwardRef,
} from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface AvatarProps {
  /** The src of the image */
  src: string;
  /** Fallback component to use when the image is not loading */
  fallback?: ReactNode;
  /** The size of the Avatar */
  size?: 'sm' | 'md' | 'lg';
}

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

const Avatar = forwardRef<'div', AvatarProps>((props, ref) => {
  const { className, src, fallback, size = 'md' } = props;
  const { classes, cn } = useStyles({ size });
  return (
    <AvatarPrimitive.Root ref={ref} className={cn(classes.root, className)}>
      <AvatarPrimitive.Image className={classes.image} src={src} />
      {fallback && (
        <AvatarPrimitive.Fallback className={classes.fallback}>
          {fallback}
        </AvatarPrimitive.Fallback>
      )}
    </AvatarPrimitive.Root>
  );
});

export default createComponent(Avatar, {});
