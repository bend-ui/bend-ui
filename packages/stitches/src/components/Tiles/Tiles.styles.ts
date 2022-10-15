import { useTiles } from '@particles/primitives';
import { createStyles } from '../../styles';

export interface TilesStylesParams {
  columns?: number;
}

export default createStyles(({ columns }: TilesStylesParams) => {
  const { getTilesStyles } = useTiles({ cols: columns });
  return {
    root: {
      ...getTilesStyles,
      gap: '$md',
    },
  };
});
