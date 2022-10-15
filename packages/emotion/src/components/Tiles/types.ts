import { DefaultComponentProps } from '../../types';

export interface TilesProps extends DefaultComponentProps {
  columns?: number;
}

export interface TilesColProps extends DefaultComponentProps {
  span?: number;
  offset?: number;
}
