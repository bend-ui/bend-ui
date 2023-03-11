import { system } from '../../system';
import type { SystemProps } from '../../system';

type ImageProps = SystemProps;

export const Image = (props: ImageProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
