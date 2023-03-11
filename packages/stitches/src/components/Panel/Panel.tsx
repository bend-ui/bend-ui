import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import useStyles from './Panel.styles';
import type { DefaultComponentProps } from '../../styles';

export type PanelProps = DefaultComponentProps;

export const Panel = forwardRef<PanelProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { styles } = useStyles();
  return (
    <Box ref={ref} className={clsx(className, styles.root)} {...rest}>
      {children}
    </Box>
  );
});
