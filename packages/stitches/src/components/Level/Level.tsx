import clsx from 'clsx';
import { forwardRef, Level as LevelPrimitive } from '@particles/primitives';
import useStyles from './Level.styles';
import type { DefaultComponentProps } from '../../styles';

type LevelProps = DefaultComponentProps;

export const Level = forwardRef<LevelProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <LevelPrimitive ref={ref} className={clsx(styles['root'])} {...rest}>
      {children}
    </LevelPrimitive>
  );
});
