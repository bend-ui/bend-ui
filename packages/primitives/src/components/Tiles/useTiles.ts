import { tilesStyles } from './Tiles.styles';

export interface UseTilesProps {
  cols?: 'auto' | number;
}

export const useTiles = (props: UseTilesProps) => {
  const { cols = 'auto' } = props;
  const getTilesStyles = tilesStyles({ cols });
  return { getTilesStyles };
};
