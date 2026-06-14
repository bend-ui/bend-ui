'use client';
import {
  buttonGroup,
  ButtonGroupVariantProps,
} from '@bend-ui/styled-system/recipes';
import type { ReactNode } from 'react';
import { cx } from '@bend-ui/styled-system/css';
import { createContext } from '@bend-ui/primitives';
import { HTMLBendUIProps, bend } from '../factory';

export interface ButtonGroupContext {
  size?: ButtonGroupVariantProps['size'];
}

export const [ButtonGroupProvider, useButtonGroupContext] =
  createContext<ButtonGroupContext>('ButtonGroup');

const useButtonGroup = (props: ButtonGroupProps): ButtonGroupContext => {
  return {
    size: props.size,
  };
};

export interface ButtonGroupProps extends HTMLBendUIProps<'div'> {
  children?: ReactNode;
  size?: ButtonGroupVariantProps['size'];
  isAttached?: ButtonGroupVariantProps['isAttached'];
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { ref, ...rest } = props;
  const [variantProps, elementProps] = buttonGroup.splitVariantProps(rest);
  const classes = buttonGroup(variantProps);

  const context = useButtonGroup(elementProps);

  return (
    <ButtonGroupProvider value={context}>
      <bend.div
        ref={ref}
        role="group"
        {...elementProps}
        className={cx(classes, elementProps.className)}
      >
        {elementProps.children}
      </bend.div>
    </ButtonGroupProvider>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
