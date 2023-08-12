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

interface TooltipTriggerProps {
  children?: ReactNode;
}

const Trigger = forwardRef<'div', TooltipTriggerProps>((props, ref) => {
  const { children, ...rest } = props;
  const { getTriggerProps } = useTooltipContext();
  const child = getValidChild(children);
  return cloneElement(child, getTriggerProps({ ...rest }, ref));
});

interface TooltipContentProps {
  children?: ReactNode;
}

const Content = forwardRef<'div', TooltipContentProps>((props, ref) => {
  const { children, ...rest } = props;
  const { isOpen, getTooltipProps } = useTooltipContext();

  if (!isOpen) return null;

  return <div {...getTooltipProps(rest, ref)}>{children}</div>;
});

interface TooltipArrowProps {
  children?: never;
}

const Arrow = forwardRef<'svg', TooltipArrowProps>((props, ref) => {
  const { getArrowProps } = useTooltipContext();
  return <FloatingArrow {...getArrowProps(props, ref)} />;
});

interface TooltipProps extends UseTooltipProps {
  children?: ReactNode;
}

const Root = (props: TooltipProps) => {
  const { children, ...rest } = props;
  const tooltip = useTooltip(rest);

  return (
    <TooltipContextProvider value={tooltip}>{children}</TooltipContextProvider>
  );
};

export default createComponent(Root, { Root, Trigger, Content, Arrow });
export type {
  TooltipProps,
  TooltipTriggerProps,
  TooltipArrowProps,
  TooltipContentProps,
};
