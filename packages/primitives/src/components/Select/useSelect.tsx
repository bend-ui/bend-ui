import {
  autoUpdate,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
} from '@floating-ui/react';

export type UseSelectProps = {
  isOpen: boolean;
  onOpenChange(isOpen?: boolean): void;
  offset?: number;
};

export const useSelect = (props: UseSelectProps) => {
  const { isOpen, onOpenChange, offset: offsetProp } = props;
  const { x, y, reference, floating, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetProp),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      // useRole(context, { role: 'listbox' }),
      useDismiss(context),
      useListNavigation(context),
    ]
  );

  const getTriggerProps = () => ({
    ...getReferenceProps({ ref: reference }),
  });

  const getListboxProps = () => ({
    ...getFloatingProps({ ref: floating }),
    style: {
      position: strategy,
      top: y ?? '',
      left: x ?? '',
      overflow: 'auto',
    },
  });

  const getOptionProps = (props = {}) => ({
    ...getItemProps(props),
    role: 'option',
  });

  const getGroupProps = () => ({
    role: 'group',
  });

  return {
    reference,
    floating,
    getTriggerProps,
    getListboxProps,
    getOptionProps,
    getGroupProps,
  };
};
