import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from '@particles/primitives';
import type { LinkProps } from 'next/link';

export const NavLink = forwardRef<LinkProps, 'a'>((props, ref) => {
  const { children, href, passHref = true, ...rest } = props;
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      passHref={passHref}
      ref={ref}
      aria-current={isActive ? 'page' : null}
      {...rest}
    >
      {children}
    </Link>
  );
});
