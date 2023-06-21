import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface StackProps {
  children?: ReactNode;
}

const useStyles = createStyles({
  root: {
    base: ['flex', 'flex-col'],
  },
});

const Stack = forwardRef<StackProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

export default createComponent(Stack, {}, 'Stack');
