import * as CSS from 'csstype';

export const useGrid = () => {
  const getGridStyles = (): CSS.Properties => ({
    display: 'grid',
    gridTemplateRows: 'repeat(1, 1fr)',
    gridTemplateColumns: 'repeat(12, 1fr)',
  });

  const getGridColumnsStyles = (
    columns: number,
    start: number | 'auto' = 'auto'
  ): CSS.Properties => ({
    gridColumnEnd: `span ${columns}`,
    gridColumnStart: start,
  });

  return { getGridStyles, getGridColumnsStyles };
};
