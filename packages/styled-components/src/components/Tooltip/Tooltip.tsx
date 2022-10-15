import React from 'react';
import { system } from '../../system';
import { useTooltip } from './useTooltip';
import useStyles from './Tooltip.styles';

interface TooltipProps {
  label: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, label, ...rest } = props;
  const child: any = React.Children.only(children);
  const { getTriggerProps, getTooltipProps } = useTooltip();
  const { styles } = useStyles();

  return (
    <>
      {React.cloneElement(child, getTriggerProps(child.props))}
      <system.div sx={styles.root} {...getTooltipProps(rest)}>
        {label}
      </system.div>
    </>
  );
};
