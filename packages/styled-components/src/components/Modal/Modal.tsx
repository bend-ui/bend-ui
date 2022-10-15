import React from 'react';
import { ModalProvider, Portal, useModal } from '@particles/primitives';
import { system } from '../../system';
import useStyles from './Modal.styles';

export interface ModalProps {
  isOpen: boolean;
}

export const Root: React.FC<ModalProps> = (props) => {
  const { children, isOpen, ...rest } = props;
  const { context } = useModal({ isOpen });
  const { styles } = useStyles({}, {});
  return (
    <ModalProvider value={context}>
      <Portal>
        <system.div styles={styles.wrapper}>
          <system.div styles={styles.overlay}></system.div>
          <system.div styles={styles.root} {...rest}>
            {children}
          </system.div>
        </system.div>
      </Portal>
    </ModalProvider>
  );
};
