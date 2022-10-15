import { FloatingOverlay } from '@floating-ui/react-dom-interactions';
import {
  createComponent,
  forwardRef,
  Portal,
  useModal,
  UseModalProps,
} from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { GroupedTransition } from '../Transition';
import useStyles from './Modal.styles';

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
