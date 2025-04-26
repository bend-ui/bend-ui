import { forwardRef } from 'react';
import { splitCssProps } from '@particles/styled-system/jsx';
import { css, cx } from '@particles/styled-system/css';
import { textarea } from '@particles/styled-system/recipes';
import type { TextareaVariantProps } from '@particles/styled-system/recipes';
import type { ComponentPropsWithoutRef } from 'react';

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> &
  TextareaVariantProps;

const Component = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const [variantProps, textareaProps] = textarea.splitVariantProps(props);
    const [cssProps, otherProps] = splitCssProps(textareaProps);
    const { children, className, ...rest } = otherProps;

    const classes = textarea(variantProps);

    return (
      <div className={cx(classes.root, css(cssProps), className)}>
        <textarea ref={ref} className={classes.field} {...rest} />
      </div>
    );
  },
);

Component.displayName = 'Textarea';

export const Textarea = Object.assign(Component, {});
