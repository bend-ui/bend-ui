import { css, cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import { splitCssProps } from '@particles/styled-system/jsx';
import type { SystemStyleObject } from '@particles/styled-system/types';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface HeadingProps extends ComponentPropsWithoutRef<'h2'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  css?: SystemStyleObject;
  /** The style of the heading */
  variant?: TextVariantProps['variant'];
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const [variantProps, textProps] = text.splitVariantProps(props);
    const [cssProps, otherProps] = splitCssProps(textProps);
    const { children, as: Component = 'h2', className, ...rest } = otherProps;

    const classes = text(variantProps);

    return (
      <Component
        ref={ref}
        className={cx(classes, css(cssProps), className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = 'Heading';
