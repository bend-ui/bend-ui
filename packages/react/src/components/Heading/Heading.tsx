'use client';

import { cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ReactNode } from 'react';
import { HTMLParticlesProps, particles } from '../factory';

export interface HeadingProps extends HTMLParticlesProps<'h2'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  /** The style of the heading */
  variant?: TextVariantProps['variant'];
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const [variantProps, otherProps] = text.splitVariantProps(props);
    const { children, as: Component = 'h2', className, ...rest } = otherProps;

    const classes = text(variantProps);

    return (
      <particles.h2 ref={ref} className={cx(classes, className)} {...rest}>
        {children}
      </particles.h2>
    );
  },
);

Heading.displayName = 'Heading';
