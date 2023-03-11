import clsx from 'clsx';
import { createComponent, forwardRef, useAlert } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Media } from '../Media';
import { Box } from '../Box';
import { AlertTitle } from './AlertTitle';
import useStyles from './Alert.styles';
import type { DefaultComponentProps } from '../../types';

export type AlertProps = DefaultComponentProps & {
  palette?: 'neutral' | 'danger' | 'warning' | 'success' | 'info';
  icon?: React.ReactNode;
};

const Alert = forwardRef<AlertProps, 'div'>((props, ref) => {
  const {
    children,
    as = 'div',
    icon,
    palette = 'neutral',
    ...rest
  } = useDefaultProps('Alert', props);

  const { styles } = useStyles({ palette }, { name: 'Alert' });

  const alertProps = useAlert();

  return (
    <Box
      as={as}
      ref={ref}
      className={clsx(styles.root)}
      {...alertProps}
      {...rest}
    >
      <Media>
        {icon && <Media.Image>{icon}</Media.Image>}
        {children}
      </Media>
    </Box>
  );
});

Alert.displayName = 'Alert';

export default createComponent(Alert, { Title: AlertTitle });
