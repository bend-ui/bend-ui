import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export type TemplateProps = {
  children?: ReactNode;
};

const useStyles = createStyles({
  root: {
    base: [],
  },
});

const Template = forwardRef<TemplateProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Template, {}, 'Template');
