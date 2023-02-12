import {
  autoUpdate,
  Placement,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { useDisclosure } from '../../hooks';

export type UseMenuProps = { placement?: Placement };

export const useMenu = (props) => {
  const { placement } = props;
  const { isOpen, toggle } = useDisclosure();
  const { context, ...floatingProps } = useFloating({
    open: isOpen,
    onOpenChange: toggle,
    placement,
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);

  const dismiss = useDismiss(context);

  const interactions = useInteractions([click, dismiss]);

  return {
    ...floatingProps,
    ...interactions,
    isOpen,
    toggle,
  };
};

export type UseMenuReturn = ReturnType<typeof useMenu>;
