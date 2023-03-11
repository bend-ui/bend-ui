import { system } from '../../../system';
import useStyles from './Header.styles';
import type { ReactNode } from 'react';

export interface ModalHeaderProps {
  children?: ReactNode;
}

export const Header = (props: ModalHeaderProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div styles={styles.root} {...rest}>
      {children}
    </system.div>
  );
};
