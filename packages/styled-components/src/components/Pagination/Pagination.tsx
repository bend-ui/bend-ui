import { system, SystemProps } from '../../system';

type PaginationProps = SystemProps;

export const Pagination = (props: PaginationProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
