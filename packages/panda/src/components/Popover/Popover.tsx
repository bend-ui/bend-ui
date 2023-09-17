import React from 'react';
import type { ReactNode } from 'react';

interface PopoverTriggerProps {
  children?: ReactNode;
}

const Trigger = (props: PopoverTriggerProps) => <div>Popover</div>;

interface PopoverContentProps {
  children?: ReactNode;
}

const Content = (props: PopoverContentProps) => <div>Popover</div>;

interface PopoverProps {
  children?: ReactNode;
}

const Root = (props: PopoverProps) => <div>Popover</div>;

export default Object.assign(Root, { Trigger, Content });
