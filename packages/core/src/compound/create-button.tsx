'use client';

import type { Assign, JsxStyleProps } from '@bend-ui/styled-system/types';
import {
  button,
  type ButtonVariantProps,
} from '@bend-ui/styled-system/recipes';
import * as React from 'react';
import type {
  ComponentProps,
  ComponentType,
  ElementType,
  ReactNode,
} from 'react';
import { createCompoundComponent } from './create-compound-component';

export interface ButtonOwnProps {
  /** Disable the button. */
  isDisabled?: boolean;
  /** Set the button in a loading state. */
  isLoading?: boolean;
  /** The icon to display at the start of the button. */
  icon?: ReactNode;
  /** The icon to display at the end of the button. */
  iconEnd?: ReactNode;
}

export type ButtonProps<Root extends ElementType = 'button'> = Assign<
  ComponentProps<Root>,
  ButtonVariantProps & JsxStyleProps & ButtonOwnProps
>;

export interface CreateButtonOptions<Root extends ElementType = 'button'> {
  Root?: Root;
}

export const createButton = <RootComponent extends ElementType = 'button'>(
  options: CreateButtonOptions<RootComponent> = {},
) => {
  const Root = (options.Root ?? 'button') as ElementType;
  const slots = createCompoundComponent({
    name: 'Button',
    recipe: button,
    slots: {
      Root: {
        component: Root,
        slot: 'root',
        provider: true,
      },
      Label: {
        component: 'span',
        slot: 'label',
      },
      Icon: {
        component: 'span',
        slot: 'icon',
      },
      Spinner: {
        component: 'span',
        slot: 'spinner',
      },
    },
  });
  const ButtonRoot = slots.Root as ComponentType<
    Record<string, unknown> & { children?: ReactNode }
  >;
  const ButtonIcon = slots.Icon as ComponentType<{ children?: ReactNode }>;
  const ButtonLabel = slots.Label as ComponentType<{ children?: ReactNode }>;
  const ButtonSpinner = slots.Spinner as ComponentType<Record<string, unknown>>;

  const Component = (props: ButtonProps<RootComponent>) => {
    const {
      children,
      icon,
      iconEnd,
      isDisabled,
      isLoading,
      disabled,
      ...rest
    } = props as ButtonProps<RootComponent> & {
      disabled?: boolean;
    };
    const isActuallyDisabled = disabled || isDisabled;

    return (
      <ButtonRoot
        data-disabled={isActuallyDisabled || undefined}
        aria-disabled={isActuallyDisabled || undefined}
        aria-busy={isLoading || undefined}
        disabled={isActuallyDisabled}
        {...rest}
      >
        {isLoading && <ButtonSpinner data-loading="" />}
        {icon && <ButtonIcon>{icon}</ButtonIcon>}
        {children && <ButtonLabel>{children}</ButtonLabel>}
        {iconEnd && <ButtonIcon>{iconEnd}</ButtonIcon>}
      </ButtonRoot>
    );
  };

  Component.displayName = 'Button';

  return Object.assign(Component, slots);
};

export type ButtonComponent = ReturnType<typeof createButton>;
