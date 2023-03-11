import { system } from '../../system';
import useStyles from './Group.styles';
import type { SystemProps } from '../../system';

export type GroupProps = SystemProps;

export const Group = (props: GroupProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div sx={styles.root} {...rest}>
      {children}
    </system.div>
  );
};
