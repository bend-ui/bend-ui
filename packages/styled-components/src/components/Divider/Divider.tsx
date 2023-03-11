import { system } from '../../system';
import type { SystemProps } from '../../system';

type DividerProps = SystemProps;

export const Divider = (props: DividerProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
