import {
  createComponent,
  forwardRef,
  Switch as SwitchPrimitive,
} from '@particles/primitives';
import type { UseSwitchProps } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export type SwitchProps = UseSwitchProps & {
  children?: never;
  label?: ReactNode;
  onLabel?: ReactNode;
  offLabel?: ReactNode;
  thumbIcon?: ReactNode;
};

const useStyles = createStyles({
  root: {
    base: ['inline-flex', 'flex-row', 'gap-2'],
  },
  track: {
    base: [
      'relative',
      'inline-flex',
      'items-center',
      'justify-start',
      'data-[state=checked]:justify-end',
      'cursor-pointer',
      'w-11',
      'h-6',
      'border',
      'border-neutral-300',
      'bg-neutral-200',
      'rounded-full',
      'dark:bg-neutral-700',
      'dark:border-neutral-600',
      'data-[state=checked]:bg-indigo-600',
      'dark:data-[state=checked]:bg-indigo-600',
      'transition-colors',
    ],
  },
  thumb: {
    base: [
      'flex',
      'items-center',
      'text-neutral-800',
      'bg-white',
      'rounded-full',
      'border',
      'border-neutral-300',
      'dark:border-neutral-600',
      'h-4',
      'w-4',
      'm-1',
    ],
  },
});

/**
 * Switch is checkbox
 */
const Switch = forwardRef<SwitchProps, 'input'>((props, ref) => {
  const {
    children,
    className,
    onLabel,
    offLabel,
    thumbIcon,
    defaultChecked,
    isChecked,
    onCheckedChange,
    isDisabled,
    ...rest
  } = props;
  const { classes, cn } = useStyles();
  return (
    <SwitchPrimitive.Root className={cn(classes.root, className)}>
      <SwitchPrimitive.Input ref={ref} {...rest} />
      {!!offLabel && <div>{offLabel}</div>}
      <SwitchPrimitive.Track className={cn(classes.track)}>
        <SwitchPrimitive.Thumb className={cn(classes.thumb)}>
          {thumbIcon}
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Track>
      {!!onLabel && <div>{onLabel}</div>}
    </SwitchPrimitive.Root>
  );
});

export default createComponent(Switch, {}, 'Switch');
