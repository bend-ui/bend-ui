'use client';

import { cx } from '@bend-ui/styled-system/css';
import { text } from '@bend-ui/styled-system/recipes';
import type { TextVariantProps } from '@bend-ui/styled-system/recipes';
import type { ElementType, ReactNode } from 'react';
import { HTMLBendUIProps, bend } from '../factory';

export interface HeadingProps extends HTMLBendUIProps<'h2'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  /** The style of the heading */
  variant?: TextVariantProps['variant'];
}

export const Heading = (props: HeadingProps) => {
  const { ref, ...rest } = props;
  const [variantProps, otherProps] = text.splitVariantProps(rest);
  const {
    children,
    as: Component = 'h2',
    className,
    ...elementProps
  } = otherProps;

  const classes = text(variantProps);
  const HeadingElement = bend[Component] as ElementType;

  return (
    <HeadingElement
      ref={ref}
      className={cx(classes, className)}
      {...elementProps}
    >
      {children}
    </HeadingElement>
  );
};

Heading.displayName = 'Heading';
