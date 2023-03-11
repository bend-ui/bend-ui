import { css } from '@emotion/css';
import type { GridColProps } from './types';

export const root = css({
  display: 'grid',
  gridTemplateRows: 'repeat(1, 1fr)',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '1.5rem',
});

export const col = (props: GridColProps) =>
  css({
    backgroundColor: 'rgba(255,0,255,0.1)',
    border: '1px solid rgba(255,0,255,0.25)',
    gridColumn: `auto/span ${props.span}`,
    gridColumnStart: `${
      !!props.offset && props.offset !== 0 ? props.offset + 1 : 'auto'
    }`,
  });
