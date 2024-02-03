import { tiles } from '@particles/styled-system/patterns';
import { cx } from '@particles/styled-system/css';
import type { TilesProperties } from '@particles/styled-system/patterns';
import type { ComponentPropsWithoutRef } from 'react';

type TilesProps = ComponentPropsWithoutRef<'div'> & TilesProperties;

const Tiles = (props: TilesProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cx(tiles(), className)} {...rest}>
      {children}
    </div>
  );
};

export default Tiles;
