import React from 'react';
import { Badge as BadgePrimitive, forwardRef } from '@particles/primitives';
import { system } from '../../system';
import useStyles from './Badge.styles';

export interface BadgeProps {
  variant?: 'solid' | 'outline';
}

export const Badge = forwardRef<BadgeProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div ref={ref} as={BadgePrimitive} sx={styles.root} {...rest}>
      {children}
    </system.div>
  );
});

Badge.displayName = 'Badge';
