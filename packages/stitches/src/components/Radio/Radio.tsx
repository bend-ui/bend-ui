import { createComponent, forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { Group } from '../Group';
import { Text } from '../Text';
import { Box } from '../Box';
import { useRadio } from './useRadio';
import useStyles from './Radio.styles';
import type { DefaultComponentProps } from '../../styles';

export type RadioProps = {
  children?: React.ReactNode;
  description?: React.ReactNode;
} & DefaultComponentProps;

const Radio = forwardRef<RadioProps, 'input'>((props, ref) => {
  const { children, as = 'input', description, ...rest } = props;
  const { styles } = useStyles();
  const { getControlProps, getInputProps } = useRadio();
  return (
    <Group>
      <Box
        as={as}
        ref={ref}
        type="radio"
        name=""
        id="radio-id"
        {...getInputProps()}
        {...rest}
      />
      <span className={clsx(styles['control'])} {...getControlProps()} />

      <label htmlFor="radio-id">
        <Text className={clsx(styles.label)}>{children}</Text>
        {description && (
          <Text as="span" className={clsx(styles.description)}>
            {description}
          </Text>
        )}
      </label>
    </Group>
  );
});

export default createComponent(Radio);
