import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import { useButtonGroup } from './ButtonGroup/ButtonGroupProvider';
import useStyles from './Button.styles';
import type { DefaultComponentProps } from '../../types';

export type ButtonProps = DefaultComponentProps & {
  palette?: 'primary' | 'danger' | 'warning' | 'neutral';
  variant?: 'solid' | 'outline' | 'subtle' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  icon?: React.ReactNode;
  iconEnd?: React.ReactNode;
  isLoading?: boolean;
  isRounded?: boolean;
  isFull?: boolean;
};

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const groupProps = useButtonGroup();
  const {
    children,
    as = 'button',
    className,
    variant = 'solid',
    palette = 'neutral',
    size = 'md',
    isRounded,
    icon,
    iconEnd,
    isFull,
    ...rest
  } = useDefaultProps('Button', { ...groupProps, ...props });

  const { styles } = useStyles(
    { variant, palette, size, isRounded, isFull },
    { name: 'Button' }
  );

  return (
    <Box as={as} ref={ref} className={clsx(styles.root, className)} {...rest}>
      {icon}
      {children}
      {iconEnd}
    </Box>
  );
});

Button.displayName = 'Button';

export default createComponent(Button);
