import {
  createComponent,
  forwardRef,
  tilesTwStyles,
} from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface TilesProps {
  children?: ReactNode;
  cols?: number | 'auto';
  gap?: string;
}

const useStyles = createStyles({
  root: {
    base: [...tilesTwStyles({ cols: 3, gap: 2 })],
  },
});

const Tiles = forwardRef<TilesProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', className, cols, ...rest } = props;
  const { classes, cn } = useStyles({ cols });
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Tiles, {}, 'Tiles');
