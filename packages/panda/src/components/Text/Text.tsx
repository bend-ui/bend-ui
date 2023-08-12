import { createPolymorphicComponent } from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import { forwardRef } from 'react';
import type { ElementType, ReactNode } from 'react';

const styles = cva({
  base: {
    color: 'inherit',
  },
  variants: {
    variant: {
      title: {
        textStyle: '2xl',
      },
      body: {
        textStyle: 'md',
      },
    },
  },
});

export interface TextProps {
  as?: ElementType;
  className: HTMLElement['className'];
  children?: ReactNode;
  /** The style of the text */
  variant?: 'title' | 'body';
}

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    children,
    as: Component = 'span',
    variant,
    className,
    ...rest
  } = props;
  return (
    <Component
      ref={ref}
      className={cx(styles({ variant }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export default createPolymorphicComponent<'span', TextProps>(Text);
