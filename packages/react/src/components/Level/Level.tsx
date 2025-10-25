'use client';

import { cx } from '@particles/styled-system/css';
import { splitCssProps } from '@particles/styled-system/jsx';
import { level } from '@particles/styled-system/patterns';
import { forwardRef } from 'react';
import type { LevelProps } from './Level.types';

export const Level = forwardRef<HTMLDivElement, LevelProps>((props, ref) => {
  const [cssProps, otherProps] = splitCssProps(props);
  const { children, className, ...rest } = otherProps;
  return (
    <div ref={ref} className={cx(level(cssProps), className)} {...rest}>
      {children}
    </div>
  );
});

Level.displayName = 'Level';
