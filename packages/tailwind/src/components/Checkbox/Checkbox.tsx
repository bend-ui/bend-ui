import {
  Checkbox as CheckboxPrimitive,
  createComponent,
  forwardRef,
} from '@particles/primitives';
import { ReactNode } from 'react';
import { createStyles } from '../../styles';

export type CheckboxProps = {
  children?: never;
  label: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

const useStyles = createStyles({
  root: {
    base: ['flex', 'items-center', 'gap-3'],
  },
  indicator: {
    base: [
      'w-4',
      'h-4',
      'text-white',
      'bg-shark-100',
      'border-shark-300',
      'rounded',
      'focus:ring-indigo-500',
      'dark:focus:ring-indigo-600',
      'dark:ring-offset-shark-800',
      'focus:ring-2',
      'dark:bg-shark-700',
      'dark:border-shark-600',
    ],
  },
  label: {
    base: [],
  },
});

const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { size, label, ...rest } = props;
  const { classes } = useStyles({ size });
  return (
    <CheckboxPrimitive.Root ref={ref} className={classes.root} {...rest}>
      <CheckboxPrimitive.Indicator className={classes.indicator}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={0}
          viewBox="0 0 15 15"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.944.12l-2.75-2.5a.625.625 0 01.841-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
      <CheckboxPrimitive.Label className={classes.label}>
        {label}
      </CheckboxPrimitive.Label>
    </CheckboxPrimitive.Root>
  );
});

export default createComponent(Checkbox, {}, 'Checkbox');
