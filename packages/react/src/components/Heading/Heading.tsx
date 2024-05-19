import { createPolymorphicComponent } from '@particles/primitives';
import { css, cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { SystemStyleObject } from '@particles/styled-system/types';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface HeadingProps extends ComponentPropsWithoutRef<'h2'> {
  as?: ElementType;
  children?: ReactNode;
  css?: SystemStyleObject;
  /** The style of the heading */
  variant?: TextVariantProps['variant'];
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      children,
      as: Component = 'h2',
      variant = 'title',
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
  },
);

Heading.displayName = 'Heading';

export default createPolymorphicComponent<'span', HeadingProps>(Heading);
