import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex h-screen flex-col">
      <div className="mx-auto w-full max-w-6xl">
        <Link href="/" className="font-bold">
          Particles UI
        </Link>
      </div>
      <main className="mx-auto w-full max-w-6xl">{children}</main>
    </div>
  );
};

export default Layout;
