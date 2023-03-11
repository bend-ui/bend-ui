import { system } from '../../system';
import type { SystemProps } from '../../system';

type AvatarProps = SystemProps;

export const Avatar = (props: AvatarProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
