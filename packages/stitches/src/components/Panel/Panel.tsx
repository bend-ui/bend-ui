import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import useStyles from './Panel.styles';

export type PanelProps = SXProp;

export const Panel = forwardRef<PanelProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { styles } = useStyles();
  return (
    <Box ref={ref} className={clsx(className, styles.root)} {...rest}>
      {children}
    </Box>
  );
});
