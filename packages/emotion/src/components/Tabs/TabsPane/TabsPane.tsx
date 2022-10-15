import { forwardRef, useTabPanel } from '@particles/primitives';
import { useDefaultProps } from '../../../theme';
import { DefaultComponentProps } from '../../../types';
import useStyles from './TabsPane.styles';

export type TabsPaneProps = DefaultComponentProps & {
  value: string;
};

export const TabsPane = forwardRef<TabsPaneProps, 'div'>((props, ref) => {
  const { children, value, ...rest } = useDefaultProps('TabsPane', props);

  const { styles } = useStyles({}, { name: 'Tabs' });

  const { getTabpanelProps } = useTabPanel(value);

  return (
    <div ref={ref} className={styles.pane} {...getTabpanelProps()} {...rest}>
      {children}
    </div>
  );
});
