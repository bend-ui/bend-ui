import { css, cx } from '@bend-ui/styled-system/css';
import { splitCssProps } from '@bend-ui/styled-system/jsx';
import { text, type TextVariantProps } from '@bend-ui/styled-system/recipes';
import type { HTMLStyledProps } from '@bend-ui/styled-system/types';
import type { ElementType } from 'react';

export interface HeadingProps extends HTMLStyledProps<'h2'>, TextVariantProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = (props: HeadingProps) => {
  const [variantProps, remainingProps] = text.splitVariantProps(props);
  const [styleProps, elementProps] = splitCssProps(remainingProps);
  const { as: Component = 'h2', className, ...rest } = elementProps;
  const Element = Component as ElementType;
  return <Element className={cx(text(variantProps), css(styleProps), className)} {...rest} />;
};

Heading.displayName = 'Heading';
