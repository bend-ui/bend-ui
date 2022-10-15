import React from 'react';
import {
  TabsProvider,
  useTab,
  useTabList,
  useTabPanel,
  useTabs,
} from '@particles/primitives';
import { system, SystemProps } from '../../system';
import useStyles from './Tabs.styles';

export type TabsListProps = SystemProps;

export const List: React.FC<TabsListProps> = (props) => {
  const { children, ...rest } = props;
  const { getTablistProps } = useTabList();
  const { styles } = useStyles();

  return (
    <system.div sx={styles.list} {...getTablistProps} {...rest}>
      {children}
    </system.div>
  );
};

export interface TabsTabProps {
  value: string;
}

export const Tab: React.FC<TabsTabProps> = (props) => {
  const { children, value, ...rest } = props;
  const { getTabProps } = useTab(value);
  const { styles } = useStyles();

  return (
    <system.button sx={styles.tab} {...getTabProps} {...rest}>
      {children}
    </system.button>
  );
};

export interface TabsPanelProps {
  value: string;
}

export const Panel: React.FC<TabsPanelProps> = (props) => {
  const { children, value, ...rest } = props;
  const { getTabpanelProps } = useTabPanel(value);
  const { styles } = useStyles();
  return (
    <system.div sx={styles.panel} {...getTabpanelProps} {...rest}>
      {children}
    </system.div>
  );
};

export interface TabsProps {
  defaultTab: string;
  variant?: 'tab' | 'pill' | 'underline';
  isFitted?: boolean;
}

export const Root: React.FC<TabsProps> = (props) => {
  const {
    children,
    defaultTab,
    variant = 'underline',
    isFitted,
    ...rest
  } = props;
  const { context } = useTabs({ defaultTab });
  const { styles } = useStyles({ variant, isFitted });

  return (
    <TabsProvider value={context}>
      <system.div sx={styles.root} {...rest}>
        {children}
      </system.div>
    </TabsProvider>
  );
};

export const Tabs = Object.assign(Root, {
  List,
  Tab,
  Panel,
});
