import { cloneElement, isValidElement } from 'react';
import clsx from 'clsx';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';
import { Transition } from '../Transition';
import useStyles from './Tooltip.styles';
import { TooltipPlacement, useTooltip } from './useTooltip';

export type TootipProps = {
  children: React.ReactNode;
  label: string;
  placement?: TooltipPlacement;
  className?: string;
} & DefaultComponentProps;

const Tooltip = (props: TootipProps) => {
  const { children, label, placement, className, ...rest } = props;
  const { styles } = useStyles();
  const { isOpen, getAnchorProps, getTooltipProps } = useTooltip({ placement });

  return (
    <>
      {isValidElement(children) && cloneElement(children, getAnchorProps)}
      <Transition isMounted={isOpen}>
        {(transitionStyles) => (
          <Box
            className={clsx(styles['tooltip'], className)}
            {...getTooltipProps({ style: transitionStyles })}
            {...rest}
          >
            {label}
          </Box>
        )}
      </Transition>
    </>
  );
};

export default Tooltip;
