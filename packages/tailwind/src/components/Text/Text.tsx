import { createComponent, forwardRef } from '@particles/primitives';
import { createStyles } from '../../styles';
import type { ReactNode } from 'react';

export interface TextProps {
  children?: ReactNode;
  variant?:
    | 'display-xl'
    | 'display-lg'
    | 'display'
    | 'title-xl'
    | 'title-lg'
    | 'title'
    | 'lead'
    | 'body'
    | 'body-sm';
}

const useStyles = createStyles({
  root: {
    base: [],
    variants: {
      variant: {
        'display-xl': [
          'text-8xl',
          'tracking-tight',
          'font-medium',
          'text-gray-900',
        ],
        'display-lg': [
          'text-6xl',
          'tracking-tight',
          'font-medium',
          'text-gray-900',
        ],
        display: [
          'text-5xl',
          'tracking-tight',
          'font-semibold',
          'text-gray-900',
          'dark:text-white',
        ],
        title: [
          'text-4xl',
          'tracking-tight',
          'font-extrabold',
          'text-gray-900',
          'dark:text-white',
        ],
        lead: ['text-gray-500', 'sm:text-xl', 'dark:text-gray-400'],
        body: ['text-gray-500', 'dark:text-gray-400'],
      },
    },
  },
});

const Text = forwardRef<TextProps, 'span'>((props, ref) => {
  const {
    children,
    as: Component = 'span',
    className,
    variant = 'body',
    ...rest
  } = props;
  const { classes, cn } = useStyles({ variant });
  return (
    <Component ref={ref} className={cn(classes.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Text, {}, 'Text');
