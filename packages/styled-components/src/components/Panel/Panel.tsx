import { forwardRef } from '@particles/primitives';
import { system, SystemProps } from '../../system';
import useStyles from './Panel.styles';

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
