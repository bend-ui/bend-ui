import { useCallback, useEffect } from 'react';
import { shift, useFloating } from '@floating-ui/react-dom';
import { useDisclosure } from '@particles/primitives';

export const usePopover = (props) => {
  const { placement, strategy: strategyProp } = props;

  const { isOpen, toggle } = useDisclosure();

  const { x, y, reference, floating, strategy, update, refs } = useFloating({
    placement: placement,
    strategy: strategyProp,
    middleware: [shift()],
  });

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) {
      return null;
    }

    update();
  }, [refs.reference, refs.floating, update]);

  const getTriggerProps = useCallback(
    (props = {}) => {
      const triggerProps = {
        ...props,
        ref: reference,
        onClick: toggle,
      };
      return triggerProps;
    },
    [reference, toggle]
  );

  const getPopoverProps = useCallback(
    (props = {}) => {
      const popoverProps = {
        ...props,
        ref: floating,
        style: {
          visibility: isOpen ? 'visible' : 'hidden',
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        },
      };

      return popoverProps;
    },
    [floating, isOpen, strategy, x, y]
  );

  return { getTriggerProps, getPopoverProps };
};
