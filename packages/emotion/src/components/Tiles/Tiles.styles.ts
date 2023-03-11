import { createStyles } from '../../styles';
import type { TilesProps } from './types';

export default createStyles(({ columns }: TilesProps) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'repeat(auto, 1fr)',
    gridTemplateColumns: `repeat(${columns}, minmax(150px, 1fr))`,
    gap: '$md',
  },
}));
