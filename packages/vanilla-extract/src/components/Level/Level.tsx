import clsx from 'clsx';
import { Level as LevelPrimitive } from '@particles/primitives';
import * as styles from './Level.css';

interface LevelProps {
  children?: React.ReactNode;
}

const Level = (props: LevelProps) => {
  const { children } = props;

  const classNames = clsx([styles.level]);

  return <LevelPrimitive className={classNames}>{children}</LevelPrimitive>;
};

export default Level;
