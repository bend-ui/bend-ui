import { useCallback } from 'react';
import { useDisclosure } from '@particles/primitives';
import { shift, useFloating } from '@floating-ui/react';

export interface UseTooltipProps {
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
}

export const useTooltip = (props: UseTooltipProps = {}) => {
  const { placement = 'top' } = props;

  const { isOpen, toggle } = useDisclosure();

  const { x, y, reference, floating } = useFloating({
    placement: placement,
    middleware: [shift()],
  });

  const getTriggerProps = useCallback(
    (props = {}) => {
      const triggerProps = {
        ...props,
        ref: reference,
        onMouseEnter: toggle,
        onMouseLeave: toggle,
        onFocus: toggle,
        onBlur: toggle,
      };

      return triggerProps;
    },
    [reference, toggle]
  );

  const getTooltipProps = useCallback(
    (props = {}) => {
      const tooltipProps = {
        ...props,
        ref: floating,
        style: {
          visibility: isOpen ? 'visible' : 'hidden',
          position: 'absolute',
          top: y ?? '',
          left: x ?? '',
        },
      };

      return tooltipProps;
    },
    [floating, isOpen, x, y]
  );

  return {
    getTriggerProps,
    getTooltipProps,
  };
};
