import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useLockBodyScroll } from '../../hooks';
import { createContext } from '../../utils';

export const [ModalProvider, useModalContext] = createContext('ModalContext');

export interface UseModalProps {
  isOpen: boolean;
  onClose?(): void;
}

export const useModal = (props: UseModalProps) => {
  const { isOpen, onClose } = props;

  useLockBodyScroll();

  const { floating, context } = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  });

  const { getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  return { floating, getFloatingProps };
};
