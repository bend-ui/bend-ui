import { FloatingFocusManager } from '@floating-ui/react-dom-interactions';
import React from 'react';
import { forwardRef } from '../../utils';
import { PopoverProvider, usePopoverContext } from './PopoverContext';
import { usePopover, UsePopoverProps } from './usePopover';

type PopoverTriggerProps = {
  children?: React.ReactNode;
};

const Trigger = (props: PopoverTriggerProps) => {
  const { children } = props;

  const child = React.Children.only(children);
  const { getTriggerProps } = usePopoverContext();

  return (
    React.isValidElement(child) &&
    React.cloneElement(child, { ...getTriggerProps() })
  );
};

type PopoverPanelProps = {
  children?: React.ReactNode;
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
  children?: React.ReactNode;
} & UsePopoverProps;

const Popover = (props: PopoverProps) => {
  const { children, ...rest } = props;
  const context = usePopover(rest);
  return <PopoverProvider value={context}>{children}</PopoverProvider>;
};

export default Object.assign(Popover, { Trigger, Panel });
