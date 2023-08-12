import {
  Button as ButtonPrimitive,
  createPolymorphicComponent,
} from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import { forwardRef } from 'react';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export const styles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1ch',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    border: '1px solid transparent',
    backgroundColor: 'unset',
    textDecoration: 'none',
    borderRadius: 'md',
  },
  variants: {
    palette: {
      primary: {
        colorPalette: 'primary',
      },
      secondary: {
        colorPalette: 'neutral',
      },
    },
    variant: {
      solid: {
        color: 'colorPalette.onPrimary',
        bgColor: 'colorPalette.base',
        borderColor: 'transparent',
        _hover: {
          bgColor: 'colorPalette.hover',
        },
      },
      outline: {
        color: 'colorPalette.base',
        borderColor: 'colorPalette.base',
        bgColor: 'transparent',
      },
    },
    size: {
      small: {
        paddingInline: 'sm',
        paddingBlock: 'sm',
      },
      medium: {
        paddingInline: 'md',
        paddingBlock: 'md',
      },
      large: {
        paddingInline: 'lg',
        paddingBlock: 'lg',
      },
    },
    isRounded: {
      true: {
        rounded: 'full',
      },
    },
  },
  defaultVariants: {
    palette: 'primary',
    variant: 'solid',
    size: 'medium',
    isRounded: false,
  },
});

export type ButtonVariants = RecipeVariantProps<typeof styles>;

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonVariants & {
    as?: ElementType;
    children?: ReactNode;
    /** Disable the button */
    isDisabled?: boolean;
    /** Set the button in a loading state */
    isLoading?: boolean;
  };

const Root = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    as = 'button',
    className,
    palette,
    variant,
    size,
    isRounded,
    ...rest
  } = props;
  return (
    <ButtonPrimitive.Root
      ref={ref}
      as={as}
      className={cx(styles({ palette, variant, size, isRounded }), className)}
      {...rest}
    >
      {children}
    </ButtonPrimitive.Root>
  );
});

Root.displayName = 'Button';

export const Button = createPolymorphicComponent<'button', ButtonProps>(Root);
