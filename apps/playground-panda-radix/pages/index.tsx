import { css, cx } from '@particles/styled-system/css';
import { center } from '@particles/styled-system/patterns';
import Link from 'next/link';

const classes = css({
  padding: 'md',
  border: 'divider',
  rounded: 'md',
});

const Index = () => (
  <div
    className={cx(
      center(),
      css({ height: 'screen', display: 'flex', gap: 'sm' }),
    )}
  >
    <Link className={classes} href="/dashboard">
      Dashboard
    </Link>
    <Link className={classes} href="/auth">
      Auth
    </Link>
    <Link className={classes} href="/music">
      Music
    </Link>
    <Link className={classes} href="/messenger">
      Messenger
    </Link>
  </div>
);

export default Index;
