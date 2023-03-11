import { createStyles } from '../../styles';
import type { TilesColProps } from './types';

export default createStyles(({ span, offset }: TilesColProps) => ({
  col: {
    backgroundColor: 'rgba(255,0,255,0.1)',
    border: '1px solid rgba(255,0,255,0.25)',
    gridColumn: `auto/span ${span}`,
    gridColumnStart: `${!!offset && offset !== 0 ? offset + 1 : 'auto'}`,
  },
}));
