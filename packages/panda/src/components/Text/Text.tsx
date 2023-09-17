import { createPolymorphicComponent } from '@particles/primitives';
import { css, cx } from '@particles/panda-system/css';
import { text } from '@particles/panda-system/recipes';
import { forwardRef } from 'react';
import type { SystemStyleObject } from '@particles/panda-system/types';
import type { TextVariantProps } from '@particles/panda-system/recipes';
import type { ElementType, ReactNode } from 'react';

export interface TextProps {
  as?: ElementType;
  className: HTMLElement['className'];
  children?: ReactNode;
  css?: SystemStyleObject;
  /** The style of the text */
  variant?: TextVariantProps['variant'];
}

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    children,
    as: Component = 'span',
    variant,
    className,
    css: cssProp = {},
    ...rest
  } = props;

  const classes = text({ variant });

  return (
    <Component
      ref={ref}
      className={cx(classes, css(cssProp), className)}
      {...rest}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export default createPolymorphicComponent<'span', TextProps>(Text);
