import { createComponent, forwardRef } from '@particles/primitives';
import { ReactNode } from 'react';
import { createStyles } from '../../styles';

export type InputProps = {
  children?: never;
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconEnd?: ReactNode;
};

const useStyles = createStyles({
  root: {
    base: ['flex', 'relative'],
  },
  input: {
    base: [
      'border',
      'border-surface-accent',
      'text-sm',
      'rounded-lg',
      'p-2',
      'bg-surface',
      'focus:outline-none',
      'focus:ring',
      'focus:ring-indigo-500/30',
      'ring-offset-1',
      'ring-offset-indigo-500',
      'focus:border-transparent',
      'drop-shadow',
    ],
    variants: {
      withIcon: {
        true: ['pl-9'],
      },
    },
  },
  icon: {
    base: [
      'absolute',
      'inset-y-0',
      'left-0',
      'flex',
      'items-center',
      'pointer-events-none',
      'pl-3',
      'z-10',
    ],
  },
});

const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const {
    as: Component = 'input',
    type = 'text',
    size = 'md',
    icon,
    iconEnd,
    ...rest
  } = props;
  const { classes, cn } = useStyles({ size, withIcon: !!icon });
  return (
    <div className={classes.root}>
      {icon && <span className={classes.icon}>{icon}</span>}
      <Component
        ref={ref}
        className={cn(classes.input)}
        type={type}
        {...rest}
      />
      {iconEnd}
    </div>
  );
});

export default createComponent(Input);
