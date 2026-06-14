'use client';

import { splitCssProps } from '@bend-ui/styled-system/jsx';
import { css, cx } from '@bend-ui/styled-system/css';
import { textarea } from '@bend-ui/styled-system/recipes';
import type { TextareaVariantProps } from '@bend-ui/styled-system/recipes';
import type { ComponentProps } from 'react';

export type TextareaProps = ComponentProps<'textarea'> & TextareaVariantProps;

const Component = (props: TextareaProps) => {
  const { ref, ...rest } = props;
  const [variantProps, textareaProps] = textarea.splitVariantProps(rest);
  const [cssProps, otherProps] = splitCssProps(textareaProps);
  const { children, className, ...elementProps } = otherProps;

  const classes = textarea(variantProps);

  return (
    <div className={cx(classes.root, css(cssProps), className)}>
      <textarea ref={ref} className={classes.field} {...elementProps} />
    </div>
  );
};

Component.displayName = 'Textarea';

export const Textarea = Object.assign(Component, {});
