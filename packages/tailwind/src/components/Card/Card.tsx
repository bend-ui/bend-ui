import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface CardProps {
  children?: ReactNode;
}

const useStyles = createStyles({
  root: {
    base: [
      'overflow-hidden',
      'rounded-lg',
      'border',
      'border-surface-accent',
      'shadow-sm',
      'bg-surface',
      'p-4',
    ],
  },
});

const Card = forwardRef<CardProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Card, {}, 'Card');
