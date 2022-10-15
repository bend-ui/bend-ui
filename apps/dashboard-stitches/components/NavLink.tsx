import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const NavLink: React.FC<LinkProps> = (props) => {
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
