import { Children, cloneElement, isValidElement } from 'react';
import { isForwardRef } from 'react-is';
import { createComponent, Portal, useTooltip } from '@particles/primitives';
import type { UseTooltipProps } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import { Transition } from '../Transition';
import useStyles from './Tooltip.styles';
import type { DefaultComponentProps } from '../../types';

export type TooltipProps = DefaultComponentProps &
  UseTooltipProps & {
    children: React.ReactNode;
    content: React.ReactNode;
  };

const Tooltip = (props: TooltipProps) => {
  const {
    children,
    content,
    placement = 'top',
    ...rest
  } = useDefaultProps('Tooltip', props);
  const { isOpen, getTriggerProps, getTooltipProps } = useTooltip({
    placement,
  });
  const { styles } = useStyles();
  return (
    <>
      {Children.only(children) &&
        isValidElement(children) &&
        isForwardRef(children) &&
        cloneElement(children, {
          ...getTriggerProps(children.props, (children as any).ref),
        })}
      <Portal>
        <Transition isMounted={isOpen}>
          {(transitionStyles) => (
            <Box
              {...getTooltipProps({
                style: transitionStyles,
                className: styles.root,
              })}
              {...rest}
            >
              {content}
            </Box>
          )}
        </Transition>
      </Portal>
    </>
  );
};

export default createComponent(Tooltip);
