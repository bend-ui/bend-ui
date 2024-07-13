import { css, cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import { splitCssProps } from '@particles/styled-system/jsx';
import type { JsxStyleProps } from '@particles/styled-system/types';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type Assign<T, U> = Omit<T, keyof U> & U;

export interface ParagraphProps
  extends Assign<JsxStyleProps, ComponentPropsWithoutRef<'p'>> {
  children?: ReactNode;
  /** The style of the text */
  variant?: TextVariantProps['variant'];
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    const [variantProps, textProps] = text.splitVariantProps(props);
    const [cssProps, otherProps] = splitCssProps(textProps);
    const { children, className, ...rest } = otherProps;

    const classes = text(variantProps);

    return (
      <p ref={ref} className={cx(classes, css(cssProps), className)} {...rest}>
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';
