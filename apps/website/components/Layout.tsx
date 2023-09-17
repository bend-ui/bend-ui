import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <div>
        <Link href="/">Particles UI</Link>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
