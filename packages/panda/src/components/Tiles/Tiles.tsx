import { tiles } from '@particles/panda-system/patterns';
import { cx } from '@particles/panda-system/css';
import type { TilesProperties } from '@particles/panda-system/patterns';
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
