import { system } from '../../system';
import useStyles from './Stack.styles';
import type { SystemProps } from '../../system';

export type StackProps = SystemProps;

export const Stack = (props: StackProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();

  return (
    <system.div sx={styles.root} {...rest}>
      {children}
    </system.div>
  );
};
