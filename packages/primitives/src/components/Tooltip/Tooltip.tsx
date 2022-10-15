import React from 'react';
import { UseTooltipProps } from './useTooltip';

export interface TooltipProps extends UseTooltipProps {
  content?: React.ReactNode;
  children?: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => {
  const { children, content, ...rest } = props;
  return (
    <>
      {children}
      <span {...rest}>{content}</span>
    </>
  );
};

export default Tooltip;
