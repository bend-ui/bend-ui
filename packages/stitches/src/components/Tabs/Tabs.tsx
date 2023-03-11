import {
  forwardRef,
  TabsProvider,
  useTab,
  useTabList,
  useTabPanel,
  useTabs,
} from '@particles/primitives';
import clsx from 'clsx';
import { Box } from '../Box';
import { Nav } from '../Nav';
import useStyles from './Tabs.styles';
import type { NavProps } from '../Nav/Nav';
import type { DefaultComponentProps } from '../../styles';

type TabsProps = NavProps & DefaultComponentProps;

const Tabs = forwardRef<TabsProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  const context = useTabs();
  return (
    <TabsProvider value={context}>
      <Box ref={ref} className={clsx(styles.root)} {...rest}>
        {children}
      </Box>
    </TabsProvider>
  );
});

type TabsListProps = DefaultComponentProps;

const List = forwardRef<TabsListProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { getTablistProps } = useTabList();
  return (
    <Nav ref={ref} variant="tab" {...getTablistProps()} {...rest}>
      {children}
    </Nav>
  );
});

type TabsTabProps = { value: string } & DefaultComponentProps;

const Tab = forwardRef<TabsTabProps, 'button'>((props, ref) => {
  const { children, value, ...rest } = props;
  const { getTabProps } = useTab(value);

  return (
    <Nav.Link ref={ref} as="button" {...getTabProps()} {...rest}>
      {children}
    </Nav.Link>
  );
});

type TabsPaneProps = { value: string } & DefaultComponentProps;

const Pane = forwardRef<TabsPaneProps, 'div'>((props, ref) => {
  const { children, value, ...rest } = props;
  const { getTabpanelProps } = useTabPanel(value);
  return (
    <div ref={ref} {...getTabpanelProps()} {...rest}>
      {children}
    </div>
  );
});

export default Object.assign(Tabs, { List, Tab, Pane });
