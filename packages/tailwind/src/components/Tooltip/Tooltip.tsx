import { ReactNode } from 'react';
import {
  createComponent,
  forwardRef,
  Tooltip as Primitive,
} from '@particles/primitives';
import { twMerge } from 'tailwind-merge';
import { createStyles } from '../../styles';

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
      'bg-shark-900',
      'rounded-lg',
      'shadow-sm',
      'dark:bg-shark-700',
      'data-[state=open]:animate-in',
      'data-[state=open]:fade-in-50',
      'data-[state=close]:opacity-0',
    ],
  },
});

const Tooltip = forwardRef<TooltipProps, 'div'>((props, ref) => {
  const { children, content, ...rest } = props;
  const { classes } = useStyles();
  return (
    <Primitive.Root
      ref={ref}
      className={twMerge(classes.root)}
      content={content}
      {...rest}
    >
      {children}
    </Primitive.Root>
  );
});

export default createComponent(Tooltip, {}, 'Tooltip');
