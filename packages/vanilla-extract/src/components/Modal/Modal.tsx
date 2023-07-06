import { forwardRef, useModal } from '@particles/primitives';
import * as styles from './Modal.css';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
}

const Modal = forwardRef<ModalProps, 'div'>((props, ref) => {
  const { children, isOpen, ...rest } = props;
  const { getFloatingProps } = useModal({ isOpen });
  return (
    <div
      ref={ref}
      {...getFloatingProps({ className: styles.modal() })}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Object.assign(Modal, {});
