import {
  createComponent,
  forwardRef,
  Popover as PopoverPrimitive,
} from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

const useStyles = createStyles({
  root: {
    base: [],
  },
  panel: {
    base: ['bg-surface p-4 rounded border border-surface-accent w-min'],
  },
});

export interface PopoverTargetProps {
  children?: ReactNode;
}

const Target = forwardRef<PopoverTargetProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <PopoverPrimitive.Trigger ref={ref} {...rest}>
      {children}
    </PopoverPrimitive.Trigger>
  );
});

export interface PopoverPanelProps {
  children?: ReactNode;
}

const Panel = forwardRef<PopoverPanelProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { classes, cn } = useStyles();

  return (
    <PopoverPrimitive.Panel
      ref={ref}
      className={cn(classes.panel, className)}
      {...rest}
    >
      {children}
    </PopoverPrimitive.Panel>
  );
});

export interface PopoverProps {
  children?: ReactNode;
}

const Popover = forwardRef<PopoverProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <PopoverPrimitive.Root ref={ref} {...rest}>
      {children}
    </PopoverPrimitive.Root>
  );
});

export default createComponent(Popover, { Target, Panel }, 'Popover');
