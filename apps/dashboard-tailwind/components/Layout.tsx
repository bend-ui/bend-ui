import Link from 'next/link';
import { ReactNode } from 'react';
import { Input } from '@particles/tailwind';

type LayoutProps = { children?: ReactNode };

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="w-screen h-screen flex flex-row">
      {/* Sidebar */}
      <aside className="flex-0 p-6 border-r border-neutral-200">
        <div>Particles UI</div>
        <Input type="search" name="" id="" placeholder="Search" />
        <nav>
          <ul>
            <li>
              <a href="">navItem1</a>
            </li>
            <li>
              <a href="">navItem2</a>
            </li>
            <li>
              <Link href="/messages">Messages</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};
