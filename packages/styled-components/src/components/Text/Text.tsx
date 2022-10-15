import { system, SystemProps } from '../../system';

type TextProps = SystemProps;

export const Text = (props: TextProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
