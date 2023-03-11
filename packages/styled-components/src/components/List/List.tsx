import { system } from '../../system';
import type { SystemProps } from '../../system';

type ListItemProps = SystemProps;

export const Item = (props: ListItemProps) => {
  const { children, ...rest } = props;
  return <system.li {...rest}>{children}</system.li>;
};

type ListProps = SystemProps;

export const List = (props: ListProps) => {
  const { children, ...rest } = props;
  return <system.ul {...rest}>{children}</system.ul>;
};

export default Object.assign(List, { Item });
