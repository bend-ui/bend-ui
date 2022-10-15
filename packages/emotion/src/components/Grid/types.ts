export interface GridProps {
  children?: React.ReactNode;
  columns?: number;
}

export interface GridColProps {
  children?: React.ReactNode;
  span?: number;
  offset?: number;
}
