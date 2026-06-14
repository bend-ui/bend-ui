'use client';

import { cx } from '@bend-ui/styled-system/css';
import { splitCssProps } from '@bend-ui/styled-system/jsx';
import { level } from '@bend-ui/styled-system/patterns';
import type { LevelProps } from './Level.types';

export const Level = (props: LevelProps) => {
  const { ref, ...rest } = props;
  const [cssProps, otherProps] = splitCssProps(rest);
  const { children, className, ...elementProps } = otherProps;
  return (
    <div ref={ref} className={cx(level(cssProps), className)} {...elementProps}>
      {children}
    </div>
  );
};

Level.displayName = 'Level';
