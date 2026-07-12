import { css, cx } from '@bend-ui/styled-system/css';
import { splitCssProps } from '@bend-ui/styled-system/jsx';
import { text, type TextVariantProps } from '@bend-ui/styled-system/recipes';
import type { HTMLStyledProps } from '@bend-ui/styled-system/types';
import type { ElementType } from 'react';

export interface TextProps extends HTMLStyledProps<'span'>, TextVariantProps {
  as?: ElementType;
}

export const Text = (props: TextProps) => {
  const [variantProps, remainingProps] = text.splitVariantProps(props);
  const [styleProps, elementProps] = splitCssProps(remainingProps);
  const { as: Component = 'span', className, ...rest } = elementProps;
  const Element = Component as ElementType;
  return (
    <Element className={cx(text(variantProps), css(styleProps), className)} {...rest} />
  );
};

Text.displayName = 'Text';
