import { FloatingFocusManager } from '@floating-ui/react';
import { Children, cloneElement, isValidElement, ReactNode } from 'react';
import { createComponent, forwardRef } from '../../utils';
import { PopoverProvider, usePopoverContext } from './PopoverContext';
import { usePopover, UsePopoverProps } from './usePopover';

type PopoverTriggerProps = {
  children?: ReactNode;
};

const Trigger = (props: PopoverTriggerProps) => {
  const { children } = props;

  const child = Children.only(children);
  const { getTriggerProps } = usePopoverContext();

  return isValidElement(child) && cloneElement(child, { ...getTriggerProps() });
};

type PopoverPanelProps = {
  children?: ReactNode;
};

const Panel = forwardRef<PopoverPanelProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { isOpen, getPopoverProps, context, initialFocusRef } =
    usePopoverContext();
  return (
    isOpen && (
      <FloatingFocusManager context={context} initialFocus={initialFocusRef}>
        <div ref={ref} {...getPopoverProps()} {...rest}>
          {children}
        </div>
      </FloatingFocusManager>
    )
  );
});

type PopoverProps = {
  children?: ReactNode;
} & UsePopoverProps;

const Root = (props: PopoverProps) => {
  const { children, ...rest } = props;
  const context = usePopover(rest);
  return <PopoverProvider value={context}>{children}</PopoverProvider>;
};

export default createComponent(Root, { Root, Trigger, Panel }, 'Popover');
