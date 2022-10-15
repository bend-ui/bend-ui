import { system, SystemProps } from '../../system';

type ImageProps = SystemProps;

export const Image = (props: ImageProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
