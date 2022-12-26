import { Children, cloneElement, FC, ReactNode } from 'react';
import { system } from '../../system';
import { useTooltip } from './useTooltip';
import useStyles from './Tooltip.styles';

interface TooltipProps {
  children?: ReactNode;
  label: ReactNode;
}

export const Tooltip: FC<TooltipProps> = (props) => {
  const { children, label, ...rest } = props;
  const child: any = Children.only(children);
  const { getTriggerProps, getTooltipProps } = useTooltip();
  const { styles } = useStyles();

  return (
    <>
      {cloneElement(child, getTriggerProps(child.props))}
      <system.div sx={styles.root} {...getTooltipProps(rest)}>
        {label}
      </system.div>
    </>
  );
};
