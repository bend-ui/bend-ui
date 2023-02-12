import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useLockBodyScroll } from '../../hooks';
import { createContext } from '../../utils';

type ContextType = ReturnType<typeof useModal>;

export const [ModalProvider, useModalContext] =
  createContext<ContextType>('ModalContext');

export interface UseModalProps {
  isOpen: boolean;
  onClose?(): void;
}

export const useModal = (props: UseModalProps) => {
  const { isOpen, onClose } = props;

  useLockBodyScroll();

  const data = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  });

  const interactions = useInteractions([
    useClick(data.context),
    useRole(data.context),
    useDismiss(data.context),
  ]);

  return { isOpen, onClose, ...data, ...interactions };
};
