import { system, SystemProps } from '../../system';

type HeadingProps = SystemProps;

export const Heading = (props: HeadingProps) => {
  const { children, ...rest } = props;
  return <system.div {...rest}>{children}</system.div>;
};
