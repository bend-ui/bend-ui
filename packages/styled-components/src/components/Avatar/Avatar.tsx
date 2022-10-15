import { system, SystemProps } from '../../system';

type AvatarProps = SystemProps;

export const Avatar = (props: AvatarProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
