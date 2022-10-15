import {
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import { useTransition } from '../Transition';
import { getTransitionStyles } from '../Transition/getTransitionStyles';

export type UseModalProps = {
  isOpen: boolean;
  onClose(): void;
};

export const useModal = (props: UseModalProps) => {
  const { isOpen, onClose } = props;
  const { floating, context } = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  });

  const { getFloatingProps } = useInteractions([
    useDismiss(context),
    useRole(context),
  ]);

  const getModalProps = getFloatingProps({
    ref: floating,
  });

  return {
    getModalProps,
    floatingContext: context,
  };
};
