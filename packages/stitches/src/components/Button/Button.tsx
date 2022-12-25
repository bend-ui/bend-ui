import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { DefaultComponentProps } from '../../styles';
import useStyles, { ButtonStylesParams } from './Button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  iconEnd?: React.ReactElement;
} & ButtonStylesParams &
  DefaultComponentProps;

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const {
    as: Component = 'button',
    variant = 'solid',
    palette = 'primary',
    size = 'md',
    icon,
    iconEnd,
    isFull,
    className,
    children,
    sx,
    ...rest
  } = props;
  const { styles } = useStyles({ variant, palette, size, isFull });

  return (
    <Component ref={ref} className={clsx(className, styles.button)} {...rest}>
      {icon}
      {children}
      {iconEnd}
    </Component>
  );
});

Button.displayName = 'Button';

export default Object.assign(Button, {});
