import {
  forwardRef,
  TabsProvider,
  useTab,
  useTabList,
  useTabPanel,
  useTabs,
} from '@particles/primitives';
import clsx from 'clsx';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import { Nav } from '../Nav';
import { NavProps } from '../Nav/Nav';
import useStyles from './Tabs.styles';

type TabsProps = NavProps & SXProp;

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

type TabsListProps = SXProp;

const List = forwardRef<TabsListProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { getTablistProps } = useTabList();
  return (
    <Nav ref={ref} variant="tab" {...getTablistProps()} {...rest}>
      {children}
    </Nav>
  );
});

type TabsTabProps = { value: string } & SXProp;

const Tab = forwardRef<TabsTabProps, 'button'>((props, ref) => {
  const { children, value, ...rest } = props;
  const { getTabProps } = useTab(value);

  return (
    <Nav.Link ref={ref} as="button" {...getTabProps()} {...rest}>
      {children}
    </Nav.Link>
  );
});

type TabsPaneProps = { value: string } & SXProp;

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
