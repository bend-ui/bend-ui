import { sva } from '@particles/styled-system/css';
import Link from 'next/link';

const styles = sva({
  slots: ['root', 'item', 'group', 'label'],
  base: {
    root: {
      display: 'flex',
      flexDir: 'column',
      gap: 'xs',
    },
    label: {
      textStyle: 'caption',
    },
  },
});

export function Sidebar() {
  const classes = styles();
  return (
    <nav className={classes.root}>
      <h3 className={classes.label}>Favorites</h3>
      <Link href="/">Artists</Link>
      <h3 className={classes.label}>Library</h3>
      <Link href="/">Recently added</Link>
      <Link href="/">Playlists</Link>
      <Link href="/">Album</Link>
      <Link href="/">Artists</Link>
    </nav>
  );
}
