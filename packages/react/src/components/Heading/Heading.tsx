'use client';

import { cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ElementType, ReactNode } from 'react';
import { HTMLParticlesProps, particles } from '../factory';

export interface HeadingProps extends HTMLParticlesProps<'h2'> {
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
  const HeadingElement = particles[Component] as ElementType;

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
