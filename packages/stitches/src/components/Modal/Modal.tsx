import { FloatingFocusManager } from '@floating-ui/react';
import clsx from 'clsx';
import { Portal } from '@particles/primitives';
import { Box } from '../Box';
import { Panel } from '../Panel';
import { Transition } from '../Transition';
import useStyles from './Modal.styles';
import { ModalHeader } from './ModalHeader';
import { useModal } from './useModal';
import type { UseModalProps } from './useModal';
import type { DefaultComponentProps } from '../../styles';

export type ModalProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
} & UseModalProps &
  DefaultComponentProps;

const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose, title } = props;
  const { styles } = useStyles();
  const { getModalProps, floatingContext } = useModal({ isOpen, onClose });
  return (
    <Portal>
      <Transition
        isMounted={isOpen}
        transition={{ backdrop: 'fade', modal: 'fade' }}
      >
        {(transitionStyles) => (
          <FloatingFocusManager context={floatingContext}>
            <Box
              className={clsx(styles.backdrop)}
              style={transitionStyles['backdrop']}
            >
              <Panel
                className={clsx(styles.root)}
                {...getModalProps}
                style={transitionStyles['root']}
              >
                {title && <ModalHeader>{title}</ModalHeader>}
                {children}
              </Panel>
            </Box>
          </FloatingFocusManager>
        )}
      </Transition>
    </Portal>
  );
};

export default Object.assign(Modal, { Header: ModalHeader });
