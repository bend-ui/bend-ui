import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import Button from './Button';
import useStyles from './IconButton.styles';
import type { ButtonProps } from './Button';

export type IconButtonProps = Omit<ButtonProps, 'isFull' | 'iconEnd'> & {
  children: never;
};

const IconButton = forwardRef<IconButtonProps, 'button'>((props, ref) => {
  const {
    className,
    icon,
    size = 'md',
    ...rest
  } = useDefaultProps('IconButton', props);
  const { styles } = useStyles({ size }, { name: 'IconButton' });
  return (
    <Button
      ref={ref}
      p={0}
      className={clsx(styles.root, className)}
      size={size}
      {...rest}
    >
      {icon}
    </Button>
  );
});

export default createComponent(IconButton);
