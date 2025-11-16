'use client';

import { forwardRef } from 'react';
import {
  buttonGroup,
  ButtonGroupVariantProps,
} from '@particles/styled-system/recipes';
import type { ReactNode } from 'react';
import { cx } from '@particles/styled-system/css';
import { createContext } from '@particles/primitives';
import { HTMLParticlesProps, particles } from '../factory';

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

export interface ButtonGroupProps extends HTMLParticlesProps<'div'> {
  children?: ReactNode;
  size?: ButtonGroupVariantProps['size'];
  isAttached?: ButtonGroupVariantProps['isAttached'];
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const [variantProps, rest] = buttonGroup.splitVariantProps(props);
    const classes = buttonGroup(variantProps);

    const context = useButtonGroup(rest);

    return (
      <ButtonGroupProvider value={context}>
        <particles.div
          ref={ref}
          role="group"
          {...rest}
          className={cx(classes, rest.className)}
        >
          {rest.children}
        </particles.div>
      </ButtonGroupProvider>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
