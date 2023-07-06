import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { useEffect, useState } from 'react';
import type { Placement } from '@floating-ui/react';

export type PopoverPlacement = Placement;

export interface UsePopoverProps {
  isOpen?: boolean;
  placement?: PopoverPlacement;
}

export const usePopover = (props: UsePopoverProps) => {
  const { placement } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, reference, floating, refs, update, context } =
    useFloating({
      placement,
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [offset(8), shift(), flip()],
    });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
  ]);

  const getAnchorProps = getReferenceProps({ ref: reference });

  const getPopoverProps = (props) =>
    getFloatingProps({
      ref: floating,
      style: {
        ...props.style,
        position: strategy,
        top: y ?? '',
        left: x ?? '',
      },
    });

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current || !isOpen) {
      return undefined;
    }

    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [isOpen, update, refs.reference, refs.floating]);

  return {
    isOpen,
    getAnchorProps,
    getPopoverProps,
  };
};
