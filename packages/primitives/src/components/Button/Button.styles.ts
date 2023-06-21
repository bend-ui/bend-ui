import type { CSSProperties } from 'react';

export const buttonStyles: { root: CSSProperties } = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1ch',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    border: 'unset',
    backgroundColor: 'unset',
    textDecoration: 'none',
  },
};

export const twButtonStyles = {
  root: [
    'inline-flex',
    'flex-row',
    'items-center',
    'justify-center',
    'gap-[1ch]',
    'whitespace-nowrap',
    'select-none',
    'bg-[unset]',
    'no-underline',
    'border-[unset]',
  ],
};
