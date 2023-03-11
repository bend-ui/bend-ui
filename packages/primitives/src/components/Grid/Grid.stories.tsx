import React from 'react';
import { useGrid } from './useGrid';
import type { Meta } from '@storybook/react';

export default {
  title: 'Layout/Grid',
} as Meta;

export const Base = () => {
  const { getGridStyles, getGridColumnsStyles } = useGrid();
  return (
    <div style={{ ...getGridStyles(), gap: '16px' }}>
      {[...Array(12).fill(true)].map((_, i) => (
        <div
          key={`column-${i}`}
          style={{
            ...getGridColumnsStyles(1),
            backgroundColor: 'rgba(255,0,255,0.1)',
            padding: '1em',
          }}
        >
          Col
        </div>
      ))}
    </div>
  );
};

export const TwoColumns = () => {
  const { getGridStyles, getGridColumnsStyles } = useGrid();
  return (
    <div style={{ ...getGridStyles(), gap: '16px' }}>
      {[...Array(2).fill(true)].map((_, i) => (
        <div
          key={`column-${i}`}
          style={{
            ...getGridColumnsStyles(6),
            backgroundColor: 'rgba(255,0,255,0.1)',
            padding: '1em',
          }}
        >
          Col 6
        </div>
      ))}
    </div>
  );
};

export const ThreeColumns = () => {
  const { getGridStyles, getGridColumnsStyles } = useGrid();
  return (
    <div style={{ ...getGridStyles(), gap: '16px' }}>
      {[...Array(3).fill(true)].map((_, i) => (
        <div
          key={`column-${i}`}
          style={{
            ...getGridColumnsStyles(4),
            backgroundColor: 'rgba(255,0,255,0.1)',
            padding: '1em',
          }}
        >
          Col 4
        </div>
      ))}
    </div>
  );
};

export const Wrapping = () => {
  const { getGridStyles, getGridColumnsStyles } = useGrid();
  return (
    <div style={{ ...getGridStyles(), gap: '16px' }}>
      {[...Array(4).fill(true)].map((_, i) => (
        <div
          key={`column-${i}`}
          style={{
            ...getGridColumnsStyles(6),
            backgroundColor: 'rgba(255,0,255,0.1)',
            padding: '1em',
          }}
        >
          Col 6
        </div>
      ))}
    </div>
  );
};

export const Starts = () => {
  const { getGridStyles, getGridColumnsStyles } = useGrid();
  return (
    <div style={{ ...getGridStyles(), gap: '16px' }}>
      <div
        style={{
          ...getGridColumnsStyles(3, 2),
          backgroundColor: 'rgba(255,0,255,0.1)',
          padding: '1em',
        }}
      >
        Col 3 / start 2
      </div>
      <div
        style={{
          ...getGridColumnsStyles(3, 6),
          backgroundColor: 'rgba(255,0,255,0.1)',
          padding: '1em',
        }}
      >
        Col 3 / start 6
      </div>
    </div>
  );
};
