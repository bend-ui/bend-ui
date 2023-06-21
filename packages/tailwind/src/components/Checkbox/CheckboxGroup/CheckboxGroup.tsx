import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../../styles';
import type { ReactNode } from 'react';

// TODO: Create CheckboxGroup Primitive

export interface CheckboxGroupProps {
  children?: ReactNode;
}

export const useStyles = createStyles({
  root: {
    base: ['flex flex-col gap-2'],
  },
});

const CheckboxGroup = forwardRef<CheckboxGroupProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <div ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  );
});

export default createComponent(CheckboxGroup, {}, 'CheckboxGroup');
