import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../../styles';
import type { ButtonProps } from '../Button';

export type ButtonGroupProps = ButtonProps;

const useStyles = createStyles({
  root: {
    base: ['flex', 'place-items-center', 'gap-2'],
  },
});

const ButtonGroup = forwardRef<'div', ButtonGroupProps>((props, ref) => {
  const { children, as: Component = 'div', className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(ButtonGroup, {});
