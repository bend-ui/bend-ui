import { css } from '@particles/panda-system/css';
import Link from 'next/link';

const classes = css({
  padding: 'md',
  border: '1px solid',
  borderColor: 'divider',
  rounded: 'md',
});

const Index = () => (
  <div>
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
