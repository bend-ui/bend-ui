import { forwardRef, useAlert } from '@particles/primitives';
import type { AlertProps as AlertPrimitiveProps } from '@particles/primitives';
import { Box } from '../Box';
import { MediaObject } from '../MediaObject';
import useStyles from './Alert.styles';
import type { SystemProps } from '../../system';

interface AlertOptions extends SystemProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  variant?: 'solid' | 'outline';
  palette?: 'primary' | 'danger' | 'success';
}

export type AlertProps = AlertOptions &
  Omit<AlertPrimitiveProps, keyof AlertOptions>;

export const Alert = forwardRef<AlertProps, 'div'>((props, ref) => {
  const {
    children,
    title,
    icon,
    variant = 'solid',
    palette = 'danger',
    sx,
    ...rest
  } = props;
  const alertProps = useAlert();
  const { styles } = useStyles({ variant, palette }, { overrides: sx });

  return (
    <Box ref={ref} {...alertProps} styles={styles.root} {...rest}>
      <MediaObject>
        <MediaObject.Image>{icon}</MediaObject.Image>
        <MediaObject.Title>{title}</MediaObject.Title>
        <MediaObject.Body>{children}</MediaObject.Body>
      </MediaObject>
    </Box>
  );
});

Alert.displayName = 'Alert';
