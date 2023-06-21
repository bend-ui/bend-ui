import { cloneElement } from 'react';
import { getValidChild } from '@particles/react-utils';
import { FloatingArrow } from '@floating-ui/react';
import { createComponent, forwardRef } from '../../utils';
import {
  TooltipContextProvider,
  useTooltip,
  useTooltipContext,
} from './useTooltip';
import type { UseTooltipProps } from './useTooltip';
import type { ReactNode } from 'react';

export interface TooltipTriggerProps {
  children?: ReactNode;
}

const Trigger = forwardRef<TooltipTriggerProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { getTriggerProps } = useTooltipContext();
  const child = getValidChild(children);
  return cloneElement(child, getTriggerProps({ ...rest }, ref));
});

export interface TooltipContentProps {
  children?: ReactNode;
}

const Content = forwardRef<TooltipContentProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { isOpen, getTooltipProps } = useTooltipContext();

  if (!isOpen) return null;

  return <div {...getTooltipProps(rest, ref)}>{children}</div>;
});

export interface TooltipArrowProps {
  children?: never;
}

const Arrow = forwardRef<TooltipArrowProps, 'svg'>((props, ref) => {
  const { getArrowProps } = useTooltipContext();
  return <FloatingArrow {...getArrowProps(props, ref)} />;
});

export interface TooltipProps extends UseTooltipProps {
  children: ReactNode;
}

const Root = (props: TooltipProps) => {
  const { children, placement } = props;
  const tooltip = useTooltip({ placement });

  return (
    <TooltipContextProvider value={tooltip}>{children}</TooltipContextProvider>
  );
};

export default createComponent(
  Root,
  { Root, Trigger, Content, Arrow },
  'Tooltip'
);
