import { Nav } from '@particles/radix';
import { sva } from '@particles/styled-system/css';
import Link from 'next/link';

const styles = sva({
  slots: ['label'],
  base: {
    label: {
      textStyle: 'caption',
    },
  },
});

export function Sidebar() {
  const classes = styles();
  return (
    <Nav direction="vertical">
      <h3 className={classes.label}>Favorites</h3>
      <Nav.Link>
        <Link href="/">Artists</Link>
      </Nav.Link>
      <h3 className={classes.label}>Library</h3>
      <Nav.Link>
        <Link href="/">Recently added</Link>
      </Nav.Link>
      <Nav.Link>
        <Link href="/">Playlists</Link>
      </Nav.Link>
      <Nav.Link>
        <Link href="/">Album</Link>
      </Nav.Link>
      <Nav.Link>
        <Link href="/">Artists</Link>
      </Nav.Link>
    </Nav>
  );
}
