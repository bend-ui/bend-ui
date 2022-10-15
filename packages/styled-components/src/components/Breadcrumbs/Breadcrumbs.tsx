import { system, SystemProps } from '../../system';

type BreadcrumbsProps = SystemProps;

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
