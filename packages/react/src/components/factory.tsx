/**
 * This code is heavily inspired by the factory function from Ark UI
 * https://github.com/chakra-ui/ark/blob/main/packages/react/src/components/factory.ts
 **/

import React, {
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  JSX,
  forwardRef,
  memo,
} from 'react';
import { splitCssProps } from '@particles/styled-system/jsx';
import { css, cx } from '@particles/styled-system/css';
import {
  Assign,
  HTMLStyledProps,
  JsxStyleProps,
} from '@particles/styled-system/types';
import { Slot } from './Slot';

export interface PolymorphicProps {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean;
}

type JsxElements = {
  [E in keyof JSX.IntrinsicElements]: ParticlesForwardRefComponent<E>;
};

type ParticlesForwardRefComponent<E extends ElementType> =
  ForwardRefExoticComponent<ParticlesPropsWithRef<E>>;

type ParticlesPropsWithRef<E extends ElementType> = Assign<
  ComponentPropsWithRef<E>,
  JsxStyleProps
> &
  PolymorphicProps;

const withAsChild = (Component: ElementType) => {
  const ComponentWithAsChild = memo(
    forwardRef<unknown, ParticlesPropsWithRef<typeof Component>>(
      (props, ref) => {
        const [cssProps, otherProps] = splitCssProps(props);
        const { css: cssProp, ...styledProps } = cssProps;

        const classes = css(styledProps, cssProp);
        const { asChild, className, ...rest } = otherProps;

        const Comp: any = asChild ? Slot : Component;

        return <Comp ref={ref} className={cx(classes, className)} {...rest} />;
      },
    ),
  );
  // @ts-expect-error - it exists
  ComponentWithAsChild.displayName = Component.displayName || Component.name;

  return ComponentWithAsChild;
};

export type HTMLParticlesProps<T extends keyof JSX.IntrinsicElements> =
  HTMLStyledProps<T> & PolymorphicProps;

export const jsxFactory = () => {
  const cache = new Map();

  return new Proxy(withAsChild, {
    apply(_target, _thisArg, argArray) {
      return withAsChild(argArray[0]);
    },
    get(_, element) {
      const asElement = element as React.ElementType;
      if (!cache.has(asElement)) {
        cache.set(asElement, withAsChild(asElement));
      }
      return cache.get(asElement);
    },
  }) as unknown as JsxElements;
};

export const particles = jsxFactory();
