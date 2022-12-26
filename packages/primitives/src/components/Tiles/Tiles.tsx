import { ReactNode } from 'react';

export type TilesProps = { children?: ReactNode };

export const Tiles = (props: TilesProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};
