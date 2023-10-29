import {
  Checkbox as CheckboxPrimitive,
  createComponent,
  forwardRef,
  VisuallyHidden,
} from '@particles/primitives';
import type {
  CheckboxControlProps as CheckboxPrimitiveControlProps,
  CheckboxLabelProps as CheckboxPrimitiveLabelProps,
  CheckboxProps as CheckboxPrimitiveProps,
} from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode, SVGProps } from 'react';

export interface CheckboxIconProps extends SVGProps<SVGSVGElement> {
  isIndeterminate?: boolean;
}

const CheckboxIcon = (props: CheckboxIconProps) => {
  const { isIndeterminate, ...rest } = props;

  if (isIndeterminate) {
    return null;
  }

  return (
    <svg
      fill="none"
      height="1em"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 15 15"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        clipRule="evenodd"
        d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.944.12l-2.75-2.5a.625.625 0 01.841-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="none"
      />
    </svg>
  );
};

export interface CheckboxProps extends CheckboxPrimitiveProps {
  children?: never;
  label: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const useStyles = createStyles({
  root: {
    base: ['flex flex-row items-center'],
  },
  control: {
    base: [
      'w-4',
      'h-4',
      'text-white',
      'bg-neutral-100',
      'border-neutral-300',
      'rounded',
      'focus:ring-indigo-500',
      'dark:focus:ring-indigo-600',
      'dark:ring-offset-neutral-800',
      'focus:ring-2',
      'dark:bg-neutral-700',
      'dark:border-neutral-600',
      'data-[state=checked]:bg-primary',
      'dark:data-[state=checked]:bg-primary',
    ],
  },
  label: {
    base: ['flex flex-row items-center gap-3 select-none'],
  },
});

export interface CheckboxRootProps extends CheckboxPrimitiveProps {
  size?: CheckboxProps['size'];
}

const Root = forwardRef<CheckboxRootProps, 'input'>((props, ref) => {
  const { children, className, size, ...rest } = props;
  const { classes, cn } = useStyles({ size });

  return (
    <CheckboxPrimitive.Root className={cn(classes.root, className)}>
      <VisuallyHidden>
        <CheckboxPrimitive.Input ref={ref} {...rest} />
      </VisuallyHidden>
      {children}
    </CheckboxPrimitive.Root>
  );
});

export type CheckboxLabelProps = CheckboxPrimitiveLabelProps;

const Label = forwardRef<CheckboxLabelProps, 'label'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();

  return (
    <CheckboxPrimitive.Label
      ref={ref}
      className={cn(classes.label, className)}
      {...rest}
    >
      {children}
    </CheckboxPrimitive.Label>
  );
});

export type CheckboxControlProps = CheckboxPrimitiveControlProps;

const Control = forwardRef<CheckboxControlProps, 'div'>((props, ref) => {
  const { className, ...rest } = props;
  const { classes, cn } = useStyles();

  return (
    <CheckboxPrimitive.Control
      ref={ref}
      className={cn(classes.control, className)}
      {...rest}
    >
      <CheckboxIcon />
    </CheckboxPrimitive.Control>
  );
});

const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { size, label, ...rest } = props;
  return (
    <Root ref={ref} {...rest}>
      <Label>
        <Control />
        {label}
      </Label>
    </Root>
  );
});

export default createComponent(Checkbox, { Root, Label, Control }, 'Checkbox');
