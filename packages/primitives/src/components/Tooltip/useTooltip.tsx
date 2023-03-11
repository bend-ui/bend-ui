import { useCallback, useState } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { mergeRefs } from '../../utils';
import type { Placement } from '@floating-ui/react';

export interface UseTooltipProps {
  placement?: Placement;
}

export const useTooltip = (props: UseTooltipProps = {}) => {
  const { placement = 'top' } = props;

  const [isOpen, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange: setOpen,
    placement,
    middleware: [offset(4), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  const getTriggerProps = useCallback(
    (props = {}, _ref = null) => ({
      ...getReferenceProps({ ref: mergeRefs([reference, _ref]), ...props }),
    }),
    [reference, getReferenceProps]
  );

  const getTooltipProps = (props = {}, _ref = null) => ({
    ...getFloatingProps({
      ref: mergeRefs([floating, _ref]),
      ...props,
      style: {
        ...(props as any).style,
        position: strategy,
        top: y ?? '',
        left: x ?? '',
      },
    }),
  });

  return { isOpen, getTriggerProps, getTooltipProps };
};
