import {
  Button as ButtonPrimitive,
  createPolymorphicComponent,
} from '@particles/primitives';
import { css, cx } from '@particles/panda-system/css';
import { button } from '@particles/panda-system/recipes';
import { forwardRef, useCallback } from 'react';
import type { SystemStyleObject } from '@particles/panda-system/types';
import type { ButtonVariantProps } from '@particles/panda-system/recipes';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

const useComponent = (props: any) => {
  const { css: cssProp = {}, className } = props;

  const getComponentProps = useCallback(
    (recipe?: string) => ({
      className: cx(recipe, css(cssProp), className),
    }),
    [className, cssProp],
  );

  return { getComponentProps };
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  as?: ElementType;
  children?: ReactNode;
  css?: SystemStyleObject;
  palette?: ButtonVariantProps['palette'];
  variant?: ButtonVariantProps['variant'];
  size?: ButtonVariantProps['size'];
  isRounded?: ButtonVariantProps['isRounded'];
  /** Disable the button */
  isDisabled?: boolean;
  /** Set the button in a loading state */
  isLoading?: boolean;
};

const Root = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    as = 'button',
    palette = 'default',
    variant,
    size,
    isRounded,
    ...rest
  } = props;

  const { getComponentProps } = useComponent(props);

  const recipe = button({ palette, variant, size, isRounded });

  return (
    <ButtonPrimitive.Root
      ref={ref}
      as={as}
      {...getComponentProps(recipe.root)}
      {...rest}
    >
      {children}
    </ButtonPrimitive.Root>
  );
});

Root.displayName = 'Button';

export const Button = createPolymorphicComponent<'button', ButtonProps>(Root);
