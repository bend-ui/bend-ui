import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface BadgeProps {
  children?: ReactNode;
  /** The palette color for the Badge */
  palette?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success';
  withIndicator?: boolean;
}

const useStyles = createStyles({
  root: {
    base: [
      'inline-flex',
      'gap-1',
      'items-center',
      'rounded-full',
      'px-2',
      'py-1',
      'text-xs',
      'font-semibold',
    ],
    variants: {
      palette: {
        default: ['bg-neutral-200', 'text-neutral-600'],
        primary: ['bg-indigo-50', 'text-indigo-600'],
        secondary: ['bg-blue-50', 'text-blue-600'],
        danger: ['bg-red-50', 'text-red-600'],
        warning: ['bg-yellow-50', 'text-yellow-600'],
        success: ['bg-green-50', 'text-green-600'],
      },
    },
  },
  indicator: {
    base: ['w-2', 'h-2', 'bg-current', 'rounded-full'],
  },
});

const Badge = forwardRef<BadgeProps, 'span'>((props, ref) => {
  const {
    children,
    as: Component = 'span',
    className,
    palette = 'default',
    withIndicator = false,
    ...rest
  } = props;
  const { classes, cn } = useStyles({ palette });
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {withIndicator && <span className={classes.indicator} />}
      {children}
    </Component>
  );
});

export default createComponent(Badge, {}, 'Badge');
