import { useCallback, useRef, useState } from 'react';
import {
  arrow,
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
import { createContext, mergeRefs } from '../../utils';
import type { HTMLProps, Ref } from 'react';
import type { FloatingContext, Placement } from '@floating-ui/react';

export interface UseTooltipProps {
  placement?: Placement;
  defaultIsOpen?: boolean;
}

export type PropGetter<T = HTMLElement> = (
  props?: HTMLProps<T> & {
    'data-state'?: 'open' | 'close';
    [key: string]: unknown;
  },
  _ref?: Ref<T>,
) => Record<string, unknown>;

export type ArrowPropGetter = (
  props?: HTMLProps<SVGSVGElement> & {
    'data-state'?: 'open' | 'close';
    [key: string]: unknown;
  },
  _ref?: Ref<SVGSVGElement>,
) => { ref: (instance: SVGSVGElement) => void; context: FloatingContext };

export const useTooltip = (props: UseTooltipProps = {}) => {
  const { placement = 'top', defaultIsOpen } = props;

  const [isOpen, setOpen] = useState(defaultIsOpen);

  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offset(4),
      flip(),
      shift({ padding: 8 }),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const getTriggerProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ...getReferenceProps(),
      ref: mergeRefs([refs.setReference, forwardedRef]),
      'data-state': isOpen ? 'open' : 'close',
    }),
    [getReferenceProps, isOpen, refs.setReference],
  );

  const getTooltipProps: PropGetter = useCallback(
    (props = {}, forwardedRef = null) => ({
      ref: mergeRefs([refs.setFloating, forwardedRef]),
      ...props,
      ...getFloatingProps(),
      'data-state': isOpen ? 'open' : 'close',
      hidden: !isOpen,
      style: {
        ...props.style,
        ...floatingStyles,
      },
    }),
    [floatingStyles, getFloatingProps, isOpen, refs.setFloating],
  );

  const getArrowProps: ArrowPropGetter = (
    props = { context: {} },
    forwardedRef = null,
  ) => ({
    ...props,
    ref: mergeRefs([forwardedRef, arrowRef]),
    context,
  });

  return { isOpen, getTriggerProps, getTooltipProps, getArrowProps };
};

export type TooltipContext = ReturnType<typeof useTooltip>;

export const [TooltipContextProvider, useTooltipContext] =
  createContext<TooltipContext>('Tooltip');
