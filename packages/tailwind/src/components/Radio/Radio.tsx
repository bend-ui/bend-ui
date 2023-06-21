import {
  createComponent,
  forwardRef,
  Radio as RadioPrimitive,
  VisuallyHidden,
} from '@particles/primitives';
import type {
  RadioControlProps as RadioPrimitiveControlProps,
  RadioLabelProps as RadioPrimitiveLabelProps,
  RadioRootProps as RadioPrimitiveRootProps,
} from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface RadioProps extends RadioPrimitiveRootProps {
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
      'rounded-full',
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

export interface RadioRootProps extends RadioPrimitiveRootProps {
  size?: RadioProps['size'];
}

const Root = forwardRef<RadioRootProps, 'input'>((props, ref) => {
  const { children, className, size, ...rest } = props;
  const { classes, cn } = useStyles({ size });

  return (
    <RadioPrimitive.Root className={cn(classes.root, className)}>
      <VisuallyHidden>
        <RadioPrimitive.Input ref={ref} {...rest} />
      </VisuallyHidden>
      {children}
    </RadioPrimitive.Root>
  );
});

export type RadioLabelProps = RadioPrimitiveLabelProps;

const Label = forwardRef<RadioLabelProps, 'label'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();

  return (
    <RadioPrimitive.Label
      ref={ref}
      className={cn(classes.label, className)}
      {...rest}
    >
      {children}
    </RadioPrimitive.Label>
  );
});

export type RadioControlProps = RadioPrimitiveControlProps;

const Control = forwardRef<RadioControlProps, 'div'>((props, ref) => {
  const { className, ...rest } = props;
  const { classes, cn } = useStyles();

  return (
    <RadioPrimitive.Control
      ref={ref}
      className={cn(classes.control, className)}
      {...rest}
    />
  );
});

const Radio = forwardRef<RadioProps, 'input'>((props, ref) => {
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

export default createComponent(Radio, { Root, Label, Control }, 'Radio');
