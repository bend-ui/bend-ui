import Link from 'next/link';
import { useRouter } from 'next/router';
import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type NavLinkProps = LinkProps & {
  children?: ReactNode;
};

export const NavLink = (props: NavLinkProps) => {
  const { children, href, ...rest } = props;
  const { pathname } = useRouter();
  const isActive = pathname.startsWith(href as string);

  return (
    <Link href={href}>
      <a aria-current={isActive ? 'page' : null} {...rest}>
        {children}
      </a>
    </Link>
  );
};
