import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { Sprinkles, sprinkles } from '../../theme/sprinkles.css';
import * as styles from './Button.css';

export interface ButtonProps {
  children?: React.ReactNode;
  palette?: 'primary' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  isRounded?: boolean;
  sx?: Sprinkles;
}

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const {
    children,
    as: Component = 'button',
    palette = 'primary',
    size = 'md',
    isRounded = false,
    sx,
    ...rest
  } = props;

  const classNames = clsx([
    styles.button({ palette, size, isRounded }),
    sx && sprinkles(sx),
  ]);

  return (
    <Component ref={ref} className={classNames} {...rest}>
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Object.assign(Button, {});
