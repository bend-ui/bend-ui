import {
  autoUpdate,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';

export interface UseSelectProps {
  isOpen: boolean;
  onOpenChange(isOpen?: boolean): void;
  offset?: number;
}

export const useSelect = (props: UseSelectProps) => {
  const { isOpen, onOpenChange, offset: offsetProp } = props;

  const { x, y, refs, strategy, context } = useFloating({
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
      useRole(context, { role: 'listbox' }),
      useDismiss(context),
      // useListNavigation(context, {
      //   listRef: null,
      //   activeIndex: 1,
      // }),
    ],
  );

  const getTargetProps = () => ({
    ...getReferenceProps({ ref: refs.setReference }),
  });

  const getListboxProps = () => ({
    ...getFloatingProps({ ref: refs.setFloating }),
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
    reference: refs.setReference,
    floating: refs.setFloating,
    getTargetProps,
    getListboxProps,
    getOptionProps,
    getGroupProps,
    isOpen,
  };
};
