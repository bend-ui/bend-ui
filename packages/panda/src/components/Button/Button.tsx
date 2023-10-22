import {
  Button as ButtonPrimitive,
  createComponent,
  createPolymorphicComponent,
  forwardRef,
} from '@particles/primitives';
import { button } from '@particles/panda-system/recipes';
import { styled } from '@particles/panda-system/jsx';
import type { ButtonVariantProps } from '@particles/panda-system/recipes';
import { cx } from '../../system';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  as?: ElementType;
  children?: ReactNode;
  palette?: ButtonVariantProps['palette'];
  variant?: ButtonVariantProps['variant'];
  size?: ButtonVariantProps['size'];
  isRounded?: ButtonVariantProps['isRounded'];
  /** Disable the button */
  isDisabled?: boolean;
  /** Set the button in a loading state */
  isLoading?: boolean;
};

const Root = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
    children,
    as = 'button',
    className,
    palette = 'default',
    variant,
    size,
    isRounded,
    ...rest
  } = props;

  const classes = button({ palette, variant, size, isRounded });

  return (
    <ButtonPrimitive.Root
      ref={ref}
      as={as}
      className={cx(classes.root, className)}
      {...rest}
    >
      {children}
    </ButtonPrimitive.Root>
  );
});

Root.displayName = 'Button';

export const Button = createComponent(styled(Root));
