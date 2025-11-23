'use client';
import { tag } from '@particles/styled-system/recipes';
import { styled } from '@particles/styled-system/jsx';
import type { TagVariantProps } from '@particles/styled-system/recipes';
import type { HTMLStyledProps } from '@particles/styled-system/types';

export type TagRootProps = HTMLStyledProps<'div'> & TagVariantProps;

const Root = function TagRoot(props: TagRootProps) {
  const { ref, ...rest } = props;
  const [variantProps, elementProps] = tag.splitVariantProps(rest);
  const classes = tag(variantProps);
  return <styled.div ref={ref} className={classes.root} {...elementProps} />;
};

export type TagLabelProps = HTMLStyledProps<'span'>;

const Label = function TagLabel(props: TagLabelProps) {
  const { ref, ...rest } = props;
  const classes = tag();
  return <styled.span ref={ref} className={classes.label} {...rest} />;
};

export type TagCloseButtonProps = HTMLStyledProps<'button'>;

const CloseButton = function TagCloseButton(props: TagCloseButtonProps) {
  const { ref, ...rest } = props;
  const classes = tag();
  return (
    <styled.button ref={ref} className={classes.closeButton} {...rest} />
  );
};

interface TagProps extends TagRootProps {
  children: React.ReactNode;
}

const Component = function Tag(props: TagProps) {
  const { ref, children, ...rest } = props;

  return (
    <Root ref={ref} {...rest}>
      <Label>{children}</Label>
      <CloseButton />
    </Root>
  );
};

export const Tag = Object.assign(Component, {
  Root,
  Label,
  CloseButton,
});
