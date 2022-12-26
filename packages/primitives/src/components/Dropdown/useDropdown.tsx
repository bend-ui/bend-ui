import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';

type UseDropdownProps = {
  isOpen: boolean;
  onOpenChange(isOpen?: boolean): void;
};

export const useDropdown = (props: UseDropdownProps) => {
  const { isOpen, onOpenChange } = props;
  const { x, y, reference, floating, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useRole(context, { role: 'menu' }),
      useDismiss(context),
      useListNavigation(context),
    ]
  );

  const getDropdownProps = () => ({
    ...getFloatingProps({ ref: floating }),
    style: {
      position: strategy,
      top: y ?? '',
      left: x ?? '',
      overflow: 'auto',
    },
  });

  return {
    reference,
    floating,
    getDropdownProps,
    getReferenceProps,
    getItemProps,
  };
};
