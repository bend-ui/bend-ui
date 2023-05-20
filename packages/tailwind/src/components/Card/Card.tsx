import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export type CardProps = {
  children?: ReactNode;
};

const useStyles = createStyles({
  root: {
    base: [
      'overflow-hidden',
      'rounded-lg',
      'border',
      'border-border',
      'shadow-sm',
      'bg-surface',
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
