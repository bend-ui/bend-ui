import { system, SystemProps } from '../../system';
import useStyles from './Stack.styles';

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
