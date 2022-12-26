import {
  flip,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useDisclosure } from '../../hooks';

export type UsePopoverProps = {
  isOpen?: boolean;
  placement?: Placement;
  closeOnBlur?: boolean;
  closeOnEscape?: boolean;
  isLazy?: boolean;
  initialFocusRef?: number | React.MutableRefObject<HTMLElement | null>;
};

export const usePopover = (props: UsePopoverProps = {}) => {
  const {
    placement,
    closeOnBlur = true,
    closeOnEscape = true,
    initialFocusRef,
  } = props;
  const { isOpen, toggle } = useDisclosure();

  const { x, y, reference, floating, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange: toggle,
    placement,
    middleware: [flip(), offset(), shift()],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, {
      enabled: closeOnBlur,
      escapeKey: closeOnEscape,
    }),
  ]);

  const getTriggerProps = () => ({
    ...getReferenceProps({ ref: reference }),
  });

  const getPopoverProps = () => ({
    ...getFloatingProps({
      ref: floating,
      style: {
        position: strategy,
        top: y ?? 0,
        left: x ?? 0,
      },
    }),
  });

  return {
    isOpen,
    getTriggerProps,
    getPopoverProps,
    context,
    initialFocusRef,
  };
};

export type UsePopoverReturn = ReturnType<typeof usePopover>;
