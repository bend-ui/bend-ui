import { useRef, useState } from 'react';
import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import { mergeRefs } from '../../utils';
import { useDisclosure } from '../../hooks';
import type { Placement } from '@floating-ui/react';

export interface UseDropdownProps {
  placement?: Placement;
}

export const useDropdown = (props?: UseDropdownProps) => {
  const { placement = 'bottom-start' } = props;
  const { isOpen, toggle } = useDisclosure();

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: toggle,
    placement,
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

  const getTargetProps = (props = {}, forwardedRef = null) => ({
    ...props,
    ...getReferenceProps(),
    ref: mergeRefs([forwardedRef, refs.setReference]),
  });

  const getMenuProps = (props = {}, forwardedRef = null) => ({
    ...props,
    ...getFloatingProps(),
    ref: mergeRefs([forwardedRef, refs.setFloating]),
    style: {
      // ...props.style,
      ...floatingStyles,
    },
  });

  const getMenuItemProps = (props = {}, forwardedRef = null) => ({
    ...props,
    ...getItemProps(),
    ref: mergeRefs([forwardedRef]),
  });

  return {
    isOpen,
    getTargetProps,
    getMenuProps,
    getMenuItemProps,
  };
};
