import { forwardRef, useTiles } from '@particles/primitives';
import type { UseTilesProps } from '@particles/primitives';
import { Box } from '../Box';

type TilesProps = UseTilesProps;

export const Tiles = forwardRef<HTMLDivElement, TilesProps>((props, ref) => {
  const { getTilesStyles } = useTiles({ cols: 3 });
  return <Box sx={getTilesStyles} {...props} />;
});
