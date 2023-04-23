import type { ReactNode } from 'react';

type SiteLayoutProps = {
  children?: ReactNode;
};

export const SiteLayout = (props: SiteLayoutProps) => {
  const { children } = props;
  return <div>{children}</div>;
};
