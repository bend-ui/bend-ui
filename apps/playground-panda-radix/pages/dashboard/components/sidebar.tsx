import { TbDashboard, TbSettings, TbTruckDelivery } from 'react-icons/tb';
import Link from 'next/link';
import { Badge, Nav } from '@particles/radix';
import { sva } from '@particles/styled-system/css';
import { LuLayoutDashboard, LuSettings, LuTruck } from 'react-icons/lu';

const styles = sva({
  slots: ['root', 'brand', 'nav', 'group', 'item', 'section-end'],
  base: {
    nav: {
      display: 'flex',
      flexDirection: 'column',
      py: 'md',
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 'sm',
      py: 'sm',
      px: 'md',
      rounded: 'md',
      _hover: {
        bgColor: 'surface',
      },
    },
    'section-end': {
      marginInlineStart: 'auto',
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    },
  },
});

const Sidebar = () => {
  const classes = styles();
  return (
    <div>
      <div className={classes.brand}>🧬 Particles</div>
      <Nav direction="vertical">
        <Nav.Link icon={<LuLayoutDashboard />}>
          <Link href="/">Overview</Link>
        </Nav.Link>
        <Nav.Link icon={<LuSettings />}>
          <Link href="/">Settings</Link>
        </Nav.Link>
        <Nav.Link icon={<LuTruck />}>
          <Link href="/">
            Orders
            <div className={classes['section-end']}>
              <Badge>4</Badge>
            </div>
          </Link>
        </Nav.Link>
        <div className={classes.group}>
          <Link href="/">Home</Link>
        </div>
      </Nav>
    </div>
  );
};

export default Sidebar;
