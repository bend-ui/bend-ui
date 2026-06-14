'use client';

import type React from 'react';
import {
  Children,
  type JSX,
  cloneElement,
  createElement,
  isValidElement,
  memo,
} from 'react';
import { composeRefs } from '../utils/compose-refs';
import {
  Assign,
  HTMLStyledProps,
  JsxStyleProps,
} from '@bend-ui/styled-system/types';
import { styled } from '@bend-ui/styled-system/jsx';

export interface PolymorphicProps {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean;
}

type JsxElements = {
  [E in keyof JSX.IntrinsicElements]: BendUIComponent<E>;
};

type BendUIComponent<E extends React.ElementType> = (
  props: BendUIPropsWithRef<E>,
) => React.ReactElement;

type BendUIPropsWithRef<E extends React.ElementType> = Assign<
  React.ComponentPropsWithRef<E>,
  JsxStyleProps
> &
  PolymorphicProps;

// Credits to the Radix team
function getRef(element: React.ReactElement) {
  // React <=18 in DEV
  let getter = Object.getOwnPropertyDescriptor(element.props, 'ref')?.get;
  let mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return (element as any).ref;
  }

  // React 19 in DEV
  getter = Object.getOwnPropertyDescriptor(element, 'ref')?.get;
  mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return (element.props as { ref?: React.Ref<unknown> }).ref;
  }

  return (
    (element.props as { ref?: React.Ref<unknown> }).ref || (element as any).ref
  );
}

const withAsChild = (Component: React.ElementType) => {
  const Comp = memo((props: BendUIPropsWithRef<typeof Component>) => {
    const { ref, asChild, children, ...restProps } = props;

    if (!asChild) {
      return createElement(
        styled(Component),
        { ...restProps, ref },
        children,
      );
    }

    const onlyChild: React.ReactNode = Children.only(children);

    if (!isValidElement<Record<string, unknown>>(onlyChild)) {
      return null;
    }

    const childRef = getRef(onlyChild);

    return cloneElement(onlyChild, {
      ...restProps,
      ...onlyChild.props,
      ref: ref ? composeRefs(ref, childRef) : childRef,
    });
  });

  // @ts-expect-error - it exists
  Comp.displayName = Component.displayName || Component.name;

  return Comp;
};

export type HTMLBendUIProps<T extends keyof JSX.IntrinsicElements> =
  HTMLStyledProps<T> & PolymorphicProps & { children?: React.ReactNode };

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

export const bend = jsxFactory();
