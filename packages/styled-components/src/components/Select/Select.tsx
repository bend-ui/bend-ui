import { forwardRef } from '@particles/primitives';
import { system } from '../../system';
import useStyles from './Select.styles';
import type { SystemProps } from '../../system';

export type SelectProps = SystemProps;

export const Select = forwardRef<SelectProps, 'select'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.select ref={ref} sx={styles.root} {...rest}>
      {children}
    </system.select>
  );
});
