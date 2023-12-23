import {
  Button as ButtonPrimitive,
  createComponent,
  forwardRef,
} from '@particles/primitives';
import { button } from '@particles/panda-system/recipes';
import { styled } from '@particles/panda-system/jsx';
import { cx } from '@particles/panda-system/css';
import type { ButtonProps } from './Button.types';

const Root = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
    children,
    as = 'button',
    className,
    palette = 'default',
    variant,
    size,
    isRounded,
    icon,
    iconEnd,
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
      {icon}
      {children && <span className={classes.label}>{children}</span>}
      {iconEnd}
    </ButtonPrimitive.Root>
  );
});

Root.displayName = 'Button';

export const Button = createComponent(styled(Root));
