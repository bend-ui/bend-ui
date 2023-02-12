import { ReactNode } from 'react';
import { createComponent, forwardRef } from '../../utils';
import { UseTooltipProps } from './useTooltip';

export interface TooltipProps extends UseTooltipProps {
  content?: ReactNode;
  children?: ReactNode;
}

const Root = forwardRef<TooltipProps, 'span'>((props, ref) => {
  const { children, as: Component = 'span', content, ...rest } = props;
  return (
    <>
      {children}
      <Component ref={ref} {...rest}>
        {content}
      </Component>
    </>
  );
});

export default createComponent(Root, { Root }, 'Tooltip');
