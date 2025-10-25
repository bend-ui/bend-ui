'use client';

import { cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ReactNode } from 'react';
import { HTMLParticlesProps, particles } from '../factory';

export interface TextProps extends HTMLParticlesProps<'span'> {
  children?: ReactNode;
  /** The style of the text */
  variant?: TextVariantProps['variant'];
}

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const [variantProps, otherProps] = text.splitVariantProps(props);
  const { children, className, ...rest } = otherProps;

  const classes = text(variantProps);

  return (
    <particles.span ref={ref} className={cx(classes, className)} {...rest}>
      {children}
    </particles.span>
  );
});

Text.displayName = 'Text';
