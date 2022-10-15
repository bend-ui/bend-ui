import React, { forwardRef } from 'react';
import { useTiles, UseTilesProps } from '@particles/primitives';
import { Box } from '../Box';

type TilesProps = UseTilesProps;

export const Tiles = forwardRef<HTMLDivElement, TilesProps>((props, ref) => {
  const { styles } = useTiles({ cols: 3 });
  return <Box sx={styles} {...props} />;
});
