import { cloneElement } from 'react';
import { getValidChild } from '@particles/react-utils';
import { createComponent, forwardRef } from '../../utils';
import { useTooltip } from './useTooltip';
import type { UseTooltipProps } from './useTooltip';
import type { ReactNode } from 'react';

export interface TooltipProps extends UseTooltipProps {
  children: ReactNode;
  content: ReactNode;
}

const Root = forwardRef<TooltipProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', content, ...rest } = props;
  const { isOpen, getTooltipProps, getTriggerProps } = useTooltip();

  const child = getValidChild(children);

  return (
    <>
      {cloneElement(child, {
        ...getTriggerProps(),
      })}
      {isOpen && (
        <Component
          ref={ref}
          {...getTooltipProps(
            {
              ...rest,
              'data-state': isOpen ? 'open' : 'close',
              hidden: !isOpen,
            },
            ref
          )}
        >
          {content}
        </Component>
      )}
    </>
  );
});

export default createComponent(Root, { Root }, 'Tooltip');
