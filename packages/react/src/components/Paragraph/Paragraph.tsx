import { createPolymorphicComponent } from '@particles/primitives';
import { css, cx } from '@particles/styled-system/css';
import { text } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import type { SystemStyleObject } from '@particles/styled-system/types';
import type { TextVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  as?: ElementType;
  children?: ReactNode;
  css?: SystemStyleObject;
  /** The style of the text */
  variant?: TextVariantProps['variant'];
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    const {
      children,
      as: Component = 'p',
      variant = 'body',
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

Paragraph.displayName = 'Paragraph';

export default createPolymorphicComponent<'p', ParagraphProps>(Paragraph);
