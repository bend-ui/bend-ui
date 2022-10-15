import { useId } from 'react';
import { TbCheck } from 'react-icons/tb';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Radio.styles';

export type RadioProps = DefaultComponentProps & {
  label?: React.ReactNode;
  wrapperProps?: Record<string, any>;
};

export const Radio = forwardRef<RadioProps, 'input'>((props, ref) => {
  const { label, wrapperProps, ...rest } = useDefaultProps('Radio', props);
  const { styles } = useStyles({}, { name: 'Input' });
  const uuid = useId();
  return (
    <Box className={styles.root} {...wrapperProps}>
      <div className={styles.control}>
        <input
          ref={ref}
          className={styles.input}
          id={uuid}
          type="radio"
          {...rest}
        />
        <TbCheck className={styles.icon} />
      </div>
      {label && (
        <label className={styles.label} htmlFor={uuid}>
          Label
        </label>
      )}
    </Box>
  );
});

export default createComponent(Radio);
