import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { FiInfo } from 'react-icons/fi';
import { useDefaultProps } from '../../styles';
import { DismissButton } from '../Button';
import { Heading } from '../Heading';
import { Media } from '../Media';
import useStyles from './Alert.styles';
import type { AlertStylesParams } from './Alert.styles';

export type AlertProps = AlertStylesParams;

const defaultProps = {
  variant: 'solid',
  palette: 'neutral',
};

export const Alert = forwardRef<AlertProps, 'div'>((props, ref) => {
  const { children, className, variant, palette, ...rest } = useDefaultProps(
    'Alert',
    defaultProps,
    props
  );
  const { styles } = useStyles({ variant, palette });
  return (
    <Media
      ref={ref}
      className={clsx(styles['alert'], className)}
      role="alert"
      {...rest}
    >
      <Media.Image>
        <FiInfo />
      </Media.Image>
      <Media.Content>
        <Heading variant="subtitle">We’ve just released a new feature</Heading>
        {children}
      </Media.Content>
    </Media>
  );
});

Alert.displayName = 'Alert';

export default Object.assign(Alert, { CloseButton: DismissButton });
