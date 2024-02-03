import { sva } from '@particles/react';
import { TbDashboard, TbSettings, TbTruckDelivery } from 'react-icons/tb';
import Link from 'next/link';
import { Badge } from '../../../components';

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
      <nav className={classes.nav}>
        <Link className={classes.item} href="/">
          <TbDashboard />
          Overview
        </Link>
        <Link className={classes.item} href="/">
          <TbSettings />
          Settings
        </Link>
        <Link className={classes.item} href="/">
          <TbTruckDelivery />
          Orders
          <div className={classes['section-end']}>
            <Badge>4</Badge>
          </div>
        </Link>
        <div className={classes.group}>
          <Link href="/">Home</Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
