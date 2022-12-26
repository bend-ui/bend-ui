import { useEffect, useState } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';

export type TooltipPlacement = Placement;

export type UseTooltipProps = {
  placement?: TooltipPlacement;
};

export const useTooltip = (props: UseTooltipProps) => {
  const { placement } = props;
  const [isOpen, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context, refs, update } =
    useFloating({
      open: isOpen,
      onOpenChange: setOpen,
      placement,
      middleware: [offset(5), flip(), shift({ padding: 8 })],
    });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current || !isOpen) {
      return undefined;
    }

    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [isOpen, update, refs.reference, refs.floating]);

  const getAnchorProps = getReferenceProps({ ref: reference });

  const getTooltipProps = (props) =>
    getFloatingProps({
      ref: floating,
      style: {
        ...props.style,
        position: strategy,
        top: y ?? '',
        left: x ?? '',
      },
    });

  return {
    isOpen,
    getAnchorProps,
    getTooltipProps,
  };
};
