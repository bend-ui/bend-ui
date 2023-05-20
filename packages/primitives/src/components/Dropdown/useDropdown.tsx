import { useRef, useState } from 'react';
import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';

export type UseDropdownProps = {
  isOpen: boolean;
  onOpenChange(isOpen?: boolean): void;
};

export const useDropdown = (props: UseDropdownProps) => {
  const { isOpen, onOpenChange } = props;

  const { x, y, refs, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const listRef = useRef<HTMLElement[]>([]);

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useRole(context, { role: 'menu' }),
      useDismiss(context),
      useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
      }),
    ]
  );

  const getDropdownProps = () => ({
    ...getFloatingProps({ ref: refs.setFloating }),
    style: {
      position: strategy,
      top: y ?? '',
      left: x ?? '',
      overflow: 'auto',
    },
  });

  return {
    isOpen,
    onOpenChange,
    reference: refs.setReference,
    floating: refs.setFloating,
    getDropdownProps,
    getReferenceProps,
    getItemProps,
  };
};
