import type { UseTilesProps } from './useTiles';

export const tilesStyles = (props: UseTilesProps) => {
  const { cols = 'auto' } = props;
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${
      cols === 'auto' ? 'autofit' : cols
    }, minmax(0, 1fr))`,
  };
};

export const tilesTwStyles = ({ cols = 4, gap = 4 }: UseTilesProps) => [
  'grid',
  `grid-cols-${cols}`,
  `gap-${gap}`,
];
