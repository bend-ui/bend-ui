import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode, SVGProps } from 'react';

const DismissIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="none">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </g>
  </svg>
);

export interface ChipProps {
  children?: ReactNode;
  palette?: 'primary' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onDismiss?(): void;
}

const useStyles = createStyles({
  root: {
    base: ['inline-flex flex-row gap-1 rounded-full py-2 px-4'],
    variants: {
      palette: {
        primary: ['bg-primary text-primary-fg'],
      },
    },
  },
});

const Chip = forwardRef<ChipProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    className,
    palette = 'primary',
    size = 'md',
    ...rest
  } = props;
  const { classes, cn } = useStyles({ palette, size });
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
      <button>
        <DismissIcon />
      </button>
    </Component>
  );
});

export default createComponent(Chip, {}, 'Chip');
