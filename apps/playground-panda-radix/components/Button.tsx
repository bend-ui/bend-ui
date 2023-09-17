import { forwardRef } from 'react';
import { button } from '@particles/panda-system/recipes';
import { css, cx } from '@particles/panda-system/css';
import { useButton } from '@particles/primitives';
import type { SystemStyleObject } from '@particles/panda-system/types';
import type { ButtonVariantProps } from '@particles/panda-system/recipes';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type DefaultComponentProps<T extends ElementType = 'div'> =
  ComponentPropsWithoutRef<T> & { css?: SystemStyleObject };

type ButtonProps = DefaultComponentProps<'button'> &
  ButtonVariantProps & {
    icon?: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    palette,
    variant,
    size,
    css: cssProp = {},
    icon,
    ...rest
  } = props;
  const classes = button({ palette, variant, size });
  useButton();
  return (
    <button
      ref={ref}
      className={cx(classes.root, css(cssProp), className)}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
