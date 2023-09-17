import { sva } from '@particles/panda';
import type { ComponentPropsWithoutRef } from 'react';

const styles = sva({
  slots: ['root', 'label'],
  base: {
    root: {
      display: 'inline-flex',
      flexDirection: 'row',
      px: 'sm',
      backgroundColor: 'surface',
      rounded: 'full',
    },
  },
});

type BadgeProps = ComponentPropsWithoutRef<'div'>;

const Badge = (props: BadgeProps) => {
  const { children } = props;
  const classes = styles();
  return <div className={classes.root}>{children}</div>;
};

export default Badge;
