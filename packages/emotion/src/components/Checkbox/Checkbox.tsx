import { useId } from 'react';
import { TbCheck } from 'react-icons/tb';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Box } from '../Box';
import useStyles from './Checkbox.styles';

export type CheckboxProps = DefaultComponentProps & {
  label?: React.ReactNode;
  wrapperProps?: Record<string, any>;
};

export const Checkbox = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { label, wrapperProps, ...rest } = useDefaultProps('Checkbox', props);
  const { styles } = useStyles({}, { name: 'Input' });
  const uuid = useId();
  return (
    <Box className={styles.root} {...wrapperProps}>
      <div className={styles.control}>
        <input
          ref={ref}
          className={styles.input}
          id={uuid}
          type="checkbox"
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

export default createComponent(Checkbox);
