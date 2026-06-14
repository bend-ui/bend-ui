'use client';

import { tiles } from '@bend-ui/styled-system/patterns';
import { cx } from '@bend-ui/styled-system/css';
import type { TilesProperties } from '@bend-ui/styled-system/patterns';
import type { ComponentPropsWithoutRef } from 'react';

type TilesProps = ComponentPropsWithoutRef<'div'> & TilesProperties;

export const Tiles = (props: TilesProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cx(tiles(), className)} {...rest}>
      {children}
    </div>
  );
};
