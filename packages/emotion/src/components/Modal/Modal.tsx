import { FloatingOverlay } from '@floating-ui/react';
import {
  createComponent,
  forwardRef,
  Portal,
  useModal,
} from '@particles/primitives';
import type { UseModalProps } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { GroupedTransition } from '../Transition';
import useStyles from './Modal.styles';
import type { DefaultComponentProps } from '../../types';

export type ModalProps = DefaultComponentProps & UseModalProps;

const Modal = forwardRef<ModalProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    isOpen,
    onClose,
    ...rest
  } = useDefaultProps('Modal', props);
  const { styles } = useStyles();

  const { getFloatingProps } = useModal({ isOpen, onClose });

  return (
    <Portal>
      <GroupedTransition
        isMounted={isOpen}
        transitions={{
          modal: {
            transition: 'slide-up',
            duration: 300,
          },
          overlay: {
            transition: 'fade',
            duration: 300,
          },
        }}
      >
        {(transitionStyles) => (
          <FloatingOverlay
            className={styles.overlay}
            style={transitionStyles.overlay}
          >
            <Component
              ref={ref}
              className={styles.modal}
              {...getFloatingProps({ style: transitionStyles.modal })}
              {...rest}
            >
              {children}
            </Component>
          </FloatingOverlay>
        )}
      </GroupedTransition>
    </Portal>
  );
});

Modal.displayName = 'Modal';

export default createComponent(Modal);
