import Link from 'next/link';
import { TbHome, TbUser } from 'react-icons/tb';
import type { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="flex h-screen w-screen flex-row">
      {/* Sidebar */}
      <aside className="flex min-w-[300px] flex-col gap-4 border-r border-neutral-200 py-4">
        <div className="px-6 text-lg font-bold">Particles UI</div>
        <nav className="px-4">
          <ul className="flex flex-col">
            <li>
              <Link
                href="/messages"
                className="flex items-center rounded-lg px-3 py-2 text-lg font-medium text-neutral-800 hover:bg-neutral-100"
              >
                <TbHome className="mr-3" />
                Messages
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex items-center rounded-lg px-3 py-2 text-lg font-medium text-neutral-800 hover:bg-neutral-100"
              >
                <TbUser className="mr-3" />
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="flex items-center rounded-lg px-3 py-2 text-lg font-medium text-neutral-800 hover:bg-neutral-100"
              >
                <TbUser className="mr-3" />
                Customers
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="mt-auto px-4">
          <ul className="flex flex-col gap-1">
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
};
