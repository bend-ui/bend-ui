import { FloatingFocusManager } from '@floating-ui/react';
import { cloneElement } from 'react';
import { getValidChild } from '@particles/react-utils';
import { createComponent, forwardRef } from '../../utils';
import { PopoverProvider, usePopoverContext } from './PopoverContext';
import { usePopover } from './usePopover';
import type { UsePopoverProps } from './usePopover';
import type { ReactNode } from 'react';

interface PopoverTriggerProps {
  children?: ReactNode;
}

const Trigger = forwardRef<PopoverTriggerProps, 'button'>((props, ref) => {
  const { children, ...rest } = props;
  const child = getValidChild(children);
  const context = usePopoverContext();
  return cloneElement(child, context.getTriggerProps(rest, ref));
});

interface PopoverPanelProps {
  children?: ReactNode;
}

const Panel = forwardRef<PopoverPanelProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { isOpen, getPopoverProps, context, initialFocusRef } =
    usePopoverContext();
  return (
    isOpen && (
      <FloatingFocusManager context={context} initialFocus={initialFocusRef}>
        <div {...getPopoverProps(rest, ref)}>{children}</div>
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
