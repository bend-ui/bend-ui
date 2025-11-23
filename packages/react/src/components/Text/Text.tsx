'use client';

import { cx, css } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { splitCssProps } from '@particles/styled-system/jsx';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ReactNode } from 'react';
import {
  PolymorphicComponent,
  PolymorphicComponentPropsWithRef,
} from '../../utils';
import { HTMLParticlesProps } from '../factory';

export interface TextProps extends HTMLParticlesProps<'span'> {
  children?: ReactNode;
  /** The style of the text */
  variant?: TextVariantProps['variant'];
  // as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TextComponent = <T extends React.ElementType = 'span'>(
  props: PolymorphicComponentPropsWithRef<T, TextProps>,
) => {
  const { ref, ...rest } = props;
  const [variantProps, textProps] = text.splitVariantProps(rest);
  const [cssProps, otherProps] = splitCssProps(textProps);
  const { children, className, as, ...elementProps } = otherProps;
  const Component = (as || 'span') as React.ElementType;

  const classes = text(variantProps);

  return (
    <Component
      ref={ref}
      className={cx(classes, css(cssProps), className)}
      {...elementProps}
    >
      {children}
    </Component>
  );
};

export const Text = TextComponent as PolymorphicComponent<TextProps> & {
  displayName?: string;
};

Text.displayName = 'Text';
