import { button } from '@particles/panda-system/recipes';
import { cx } from '@particles/panda-system/css';
import { forwardRef, useButton } from '@particles/primitives';
import { styled } from '@particles/panda-system/jsx';
import type { ButtonVariantProps } from '@particles/panda-system/recipes';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type DefaultComponentProps<T extends ElementType = 'div'> =
  ComponentPropsWithoutRef<T>;

type ButtonProps = DefaultComponentProps<'button'> & {
  palette?: ButtonVariantProps['palette'];
  /** The variant of the button */
  variant?: ButtonVariantProps['variant'];
  /** The size of the button */
  size?: ButtonVariantProps['size'];
  isRounded?: ButtonVariantProps['isRounded'];
  icon?: ReactNode;
  isLoading?: boolean;
};

export const Button = styled(
  forwardRef<'button', ButtonProps>((props, ref) => {
    const { children, className, palette, variant, size, icon, ...rest } =
      props;
    const classes = button({ palette, variant, size });
    useButton();
    return (
      <button ref={ref} className={cx(classes.root, className)} {...rest}>
        {icon}
        {children}
      </button>
    );
  }),
);

Button.displayName = 'Button';

export default Object.assign(Button, {});
