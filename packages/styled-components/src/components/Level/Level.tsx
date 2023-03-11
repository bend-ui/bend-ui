import { system } from '../../system';
import useStyles from './Level.styles';
import type { SystemProps } from '../../system';

type LevelProps = SystemProps;

export const Level = (props: LevelProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();

  return (
    <system.div sx={styles.root} {...rest}>
      {children}
    </system.div>
  );
};
