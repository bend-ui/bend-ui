import {
  createComponent,
  forwardRef,
  Tooltip as Primitive,
} from '@particles/primitives';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
  content?: string;
}

const useStyles = createStyles({
  root: {
    base: [
      'z-10',
      'inline-block',
      'px-3',
      'py-2',
      'text-sm',
      'font-medium',
      'text-white',
      'transition-opacity',
      'duration-300',
      'bg-surface',
      'rounded-lg',
      'shadow-sm',
      'data-[state=open]:animate-in',
      'data-[state=open]:fade-in-50',
      'data-[state=close]:opacity-0',
    ],
  },
  arrow: {
    base: ['fill-surface'],
  },
});

const Tooltip = forwardRef<TooltipProps, 'div'>((props, ref) => {
  const { children, content, className, ...rest } = props;
  const { classes, cn } = useStyles();
  return (
    <Primitive.Root ref={ref} {...rest}>
      <Primitive.Trigger>{children}</Primitive.Trigger>
      <Primitive.Content className={cn(classes.root, className)}>
        {content}
        <Primitive.Arrow className={classes.arrow} />
      </Primitive.Content>
    </Primitive.Root>
  );
});

export default createComponent(Tooltip, {}, 'Tooltip');
