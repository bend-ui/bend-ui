'use client';

import { forwardRef } from 'react';
import { tag } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import type { TagVariantProps } from '@particles/styled-system/recipes';
import type { HTMLStyledProps } from '@particles/styled-system/types';

export type TagRootProps = HTMLStyledProps<'div'> & TagVariantProps;

const Root = forwardRef<HTMLDivElement, TagRootProps>(
  function TagRoot(props, ref) {
    const [variantProps, rest] = tag.splitVariantProps(props);
    const classes = tag(variantProps);
    return <styled.div ref={ref} className={classes.root} {...rest} />;
  },
);

export type TagLabelProps = HTMLStyledProps<'span'>;

const Label = forwardRef<HTMLSpanElement, TagLabelProps>(
  function TagLabel(props, ref) {
    const classes = tag();
    return <styled.span ref={ref} className={classes.label} {...props} />;
  },
);

export type TagCloseButtonProps = HTMLStyledProps<'button'>;

const CloseButton = forwardRef<HTMLButtonElement, TagCloseButtonProps>(
  function TagCloseButton(props, ref) {
    const classes = tag();
    return (
      <styled.button ref={ref} className={classes.closeButton} {...props} />
    );
  },
);

interface TagProps extends TagRootProps {
  children: React.ReactNode;
}

const Component = forwardRef<HTMLDivElement, TagProps>(
  function Tag(props, ref) {
    const { children, ...rest } = props;

    return (
      <Root ref={ref} {...rest}>
        <Label>{children}</Label>
        <CloseButton />
      </Root>
    );
  },
);

export const Tag = Object.assign(Component, {
  Root,
  Label,
  CloseButton,
});
