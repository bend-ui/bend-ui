import { system } from '../../system';
import useStyles from './Drawer.styles';
import type { ReactNode } from 'react';

export interface DrawerProps {
  children?: ReactNode;
}

export const Root = (props: DrawerProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div sx={styles.wrapper} {...rest}>
      <system.div sx={styles.overlay} />
      <system.div sx={styles.root}>{children}</system.div>
    </system.div>
  );
};

export const Drawer = Object.assign(Root, {});
