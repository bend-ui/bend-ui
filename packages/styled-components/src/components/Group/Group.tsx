import { system, SystemProps } from '../../system';
import useStyles from './Group.styles';

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
