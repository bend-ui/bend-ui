import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface InputProps {
  children?: never;
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  sectionEnd?: ReactNode;
  addonStart?: ReactNode;
  addonEnd?: ReactNode;
}

const useStyles = createStyles({
  root: {
    base: [
      'flex',
      'relative',
      'border',
      'border-surface-accent',
      'text-sm',
      'rounded-lg',
      'p-2',
      'bg-surface',
      'shadow-sm',
      'focus-within:ring focus-within:ring-indigo-500/30 ring-offset-1 ring-offset-indigo-500',
    ],
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
    },
  },
  input: {
    base: [
      'flex-1 bg-transparent border-none',
      'focus:outline-none focus:border-transparent',
    ],
    variants: {
      withIcon: {
        true: ['pl-7'],
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
    className,
    type = 'text',
    size = 'md',
    icon,
    sectionEnd,
    addonStart,
    addonEnd,
    ...rest
  } = props;
  const { classes, cn } = useStyles({ size, withIcon: !!icon });
  return (
    <div className={cn(classes.root, className)}>
      {addonStart}
      {icon && <span className={classes.icon}>{icon}</span>}
      <Component
        ref={ref}
        className={cn(classes.input)}
        type={type}
        {...rest}
      />
      {sectionEnd}
      {addonEnd}
    </div>
  );
});

export default createComponent(Input);
