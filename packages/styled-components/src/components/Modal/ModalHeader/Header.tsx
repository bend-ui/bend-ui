import React from 'react';
import { system } from '../../../system';
import useStyles from './Header.styles';

export const Header: React.FC = (props) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div styles={styles.root} {...rest}>
      {children}
    </system.div>
  );
};
