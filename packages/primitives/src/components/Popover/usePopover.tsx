import {
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useDisclosure } from '../../hooks';
import { mergeRefs } from '../../utils';
import type { Placement } from '@floating-ui/react';

export interface UsePopoverProps {
  isOpen?: boolean;
  placement?: Placement;
  closeOnBlur?: boolean;
  closeOnEscape?: boolean;
  isLazy?: boolean;
  initialFocusRef?: number | React.MutableRefObject<HTMLElement | null>;
}

export const usePopover = (props: UsePopoverProps = {}) => {
  const {
    placement,
    closeOnBlur = true,
    closeOnEscape = true,
    initialFocusRef,
  } = props;
  const { isOpen, toggle } = useDisclosure();

  const { refs, floatingStyles, context } = useFloating({
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

  const getTriggerProps = (props = {}, forwardedRef = null) => ({
    ...props,
    ...getReferenceProps(),
    ref: mergeRefs([forwardedRef, refs.setReference]),
  });

  const getPopoverProps = (props = {}, forwardedRef = null) => ({
    ...props,
    ...getFloatingProps(),
    ref: mergeRefs([forwardedRef, refs.setFloating]),
    style: {
      // ...props.style,
      ...floatingStyles,
    },
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
