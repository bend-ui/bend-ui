import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../../styles';
import type { ReactNode } from 'react';

// TODO: Create RadioGroup Primitive

export interface RadioGroupProps {
  children?: ReactNode;
}

export const useStyles = createStyles({
  root: {
    base: ['flex flex-col gap-2'],
  },
});

const RadioGroup = forwardRef<RadioGroupProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

export default createComponent(RadioGroup, {}, 'RadioGroup');
