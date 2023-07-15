import { Button as ButtonPrimitive, forwardRef } from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ReactNode } from 'react';

export const styles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1ch',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    border: 'unset',
    backgroundColor: 'unset',
    textDecoration: 'none',
    padding: '3',
    borderRadius: 'md',
  },
  variants: {
    palette: {
      primary: {
        color: 'fg.onPrimary',
        bg: 'primary',
        _hover: {
          bg: 'primary.hover',
        },
      },
      secondary: {
        color: 'fg.onSecondary',
        bg: 'secondary',
        _hover: {
          bg: 'secondary.hover',
        },
      },
    },
    size: {
      small: {
        paddingInline: 1,
        paddingBlock: 1,
      },
      medium: {
        paddingInline: 2,
        paddingBlock: 2,
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
    size: 'medium',
    isRounded: false,
  },
});

export type ButtonVariants = RecipeVariantProps<typeof styles>;

export type ButtonProps = ButtonVariants & {
  children?: ReactNode;
};

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children, className, palette, size, isRounded, ...rest } = props;
  return (
    <ButtonPrimitive.Root
      ref={ref}
      className={cx(styles({ palette, size, isRounded }), className)}
      {...rest}
    >
      {children}
    </ButtonPrimitive.Root>
  );
});

export default Button;
