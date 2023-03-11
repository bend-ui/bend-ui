import { system } from '../../system';
import type { SystemProps } from '../../system';

type HeadingProps = SystemProps;

export const Heading = (props: HeadingProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
