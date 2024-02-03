import { createPolymorphicComponent } from '@particles/primitives';
import { css, cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { SystemStyleObject } from '@particles/styled-system/types';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface TextProps extends ComponentPropsWithoutRef<'span'> {
  as?: ElementType;
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

  const recipe = text({ variant });

  return (
    <Component
      ref={ref}
      className={cx(recipe, css(cssProp), className)}
      {...rest}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export default createPolymorphicComponent<'span', TextProps>(Text);
