import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import { Media } from '../Media';
import { Text } from '../Text';
import useStyles from './Radio.styles';
import { useRadio } from './useRadio';

export type RadioProps = {
  children?: React.ReactNode;
  description?: React.ReactNode;
} & SXProp;

const Radio = forwardRef<RadioProps, 'input'>((props, ref) => {
  const { children, description, ...rest } = props;
  const { styles } = useStyles();
  const { getControlProps, getInputProps } = useRadio();
  return (
    <Media as="label" {...rest}>
      <Media.Image>
        <input ref={ref} type="radio" name="" id="" {...getInputProps()} />
        <span className={clsx(styles['control'])} {...getControlProps()}></span>
      </Media.Image>
      <Media.Content>
        <Text as="span" className={clsx(styles.label)}>
          {children}
        </Text>
        {description && (
          <Text as="span" className={clsx(styles.description)}>
            {description}
          </Text>
        )}
      </Media.Content>
    </Media>
  );
});

export default Object.assign(Radio);
