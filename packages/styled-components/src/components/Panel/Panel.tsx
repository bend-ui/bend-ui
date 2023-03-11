import { forwardRef } from '@particles/primitives';
import { system } from '../../system';
import useStyles from './Panel.styles';
import type { SystemProps } from '../../system';

type PanelProps = SystemProps;

export const Panel = forwardRef<PanelProps, 'div'>((props, ref) => {
  const { children, sx, ...rest } = props;
  const { styles } = useStyles({}, { overrides: sx });
  return (
    <system.div sx={styles.root} ref={ref} {...rest}>
      {children}
    </system.div>
  );
});

Panel.displayName = 'Panel';
