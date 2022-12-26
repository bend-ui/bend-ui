import { useClick, useFloating, useInteractions } from '@floating-ui/react';
import { HTMLProps, useState } from 'react';

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, floating, reference, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
  });

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useClick(context),
  ]);

  const getTriggerProps = () => ({ ...getReferenceProps({ ref: reference }) });

  const getMenuProps = (props: HTMLProps<HTMLElement> = {}) => ({
    ...getFloatingProps({
      ref: floating,
      style: {
        position: strategy,
        top: y ?? '',
        left: x ?? '',
        ...props?.style,
      },
      role: 'menu',
    }),
  });

  const getItemProps = () => ({ role: 'menuitem' });

  return { isOpen, getTriggerProps, getMenuProps, getItemProps };
};
