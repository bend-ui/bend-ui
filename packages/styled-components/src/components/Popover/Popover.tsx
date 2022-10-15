import React from 'react';
import { createContext } from '@particles/primitives';
import { Panel } from '../Panel';
import { usePopover } from './usePopover';

type PopoverContext = ReturnType<typeof usePopover>;

const [PopoverProvider, usePopoverContext] =
  createContext<PopoverContext>('PopoverContext');

const Trigger: React.FC = (props) => {
  const { children } = props;
  const child: any = React.Children.only(children);

  const { getTriggerProps } = usePopoverContext();

  return React.cloneElement(child, getTriggerProps(child.props));
};

const Content: React.FC = (props) => {
  const { children } = props;

  const { getPopoverProps } = usePopoverContext();

  return (
    <div {...getPopoverProps()}>
      <Panel>{children}</Panel>
    </div>
  );
};

export interface PopoverProps {
  placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  strategy: 'absolute' | 'fixed';
}

export const Root: React.FC<PopoverProps> = (props) => {
  const { children, placement, strategy } = props;

  const context = usePopover({ placement, strategy });

  return <PopoverProvider value={context}>{children}</PopoverProvider>;
};

export const Popover = Object.assign(Root, { Trigger, Content });
