import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import Button from '../Button';
import useStyles from './IconButton.styles';
import type { ButtonProps } from '../Button';

type IconButtonProps = ButtonProps;

const IconButton = forwardRef<IconButtonProps, 'button'>((props, ref) => {
  const { children, icon, className, size, ...rest } = props;

  const element = icon || children;

  const { styles } = useStyles({ size });

  return (
    <Button ref={ref} className={clsx(styles.root, className)} {...rest}>
      {element}
    </Button>
  );
});

export default IconButton;
