import React from 'react';
import {
  filterChildrenByType,
  Popover as PopoverPrimitive,
} from '@particles/primitives';
import clsx from 'clsx';
import * as styles from './Popover.css';

const Trigger = (props) => {
  const { children } = props;
  return <PopoverPrimitive.Trigger>{children}</PopoverPrimitive.Trigger>;
};

const Panel = (props) => {
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
