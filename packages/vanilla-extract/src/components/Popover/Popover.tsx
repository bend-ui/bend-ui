import {
  filterChildrenByType,
  Popover as PopoverPrimitive,
} from '@particles/primitives';
import clsx from 'clsx';
import * as styles from './Popover.css';
import type React from 'react';
import type { ReactNode } from 'react';

export type PopoverTriggerProps = {
  children?: ReactNode;
};

const Trigger = (props: PopoverTriggerProps) => {
  const { children } = props;
  return <PopoverPrimitive.Trigger>{children}</PopoverPrimitive.Trigger>;
};

export type PopoverPanelProps = {
  children?: ReactNode;
};
const Panel = (props: PopoverPanelProps) => {
  const { children } = props;
  return (
    <PopoverPrimitive.Panel className={clsx(styles.panel())}>
      {children}
    </PopoverPrimitive.Panel>
  );
};

type PopoverProps = {
  children?: React.ReactNode;
};

const Popover = (props: PopoverProps) => {
  const { children } = props;

  const trigger = filterChildrenByType(children, Trigger);
  const panel = filterChildrenByType(children, Panel);
  return (
    <PopoverPrimitive>
      {trigger}
      {panel}
    </PopoverPrimitive>
  );
};

export default Object.assign(Popover, { Trigger, Panel });
