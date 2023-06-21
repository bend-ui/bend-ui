import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const DocsLayout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <div>Particles UI</div>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
};

export default DocsLayout;
