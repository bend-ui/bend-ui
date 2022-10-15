import { FloatingFocusManager } from '@floating-ui/react-dom-interactions';
import clsx from 'clsx';
import { Portal } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import { DismissButton } from '../Button';
import { Level } from '../Level';
import { Panel } from '../Panel';
import { Transition } from '../Transition';
import useStyles from './Modal.styles';
import { ModalHeader } from './ModalHeader';
import { useModal, UseModalProps } from './useModal';

export type ModalProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
} & UseModalProps &
  SXProp;

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
