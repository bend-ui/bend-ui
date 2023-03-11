import { system } from '../../system';
import type { SystemProps } from '../../system';

type BreadcrumbsProps = SystemProps;

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
