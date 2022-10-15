import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import useStyles from './Input.styles';

export interface InputProps {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  icon?: React.ReactNode;
  startSection?: React.ReactNode;
  endSection?: React.ReactNode;
  startLabel?: React.ReactNode;
  endLabel?: React.ReactNode;
}

const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const {
    variant,
    as: Component = 'input',
    size = 'md',
    icon,
    startSection,
    endSection,
    startLabel,
    endLabel,
    ...rest
  } = useDefaultProps('Input', props);
  const { styles } = useStyles(
    { variant, size, withIcon: !!icon },
    { name: 'Input' }
  );
  return (
    <div className={styles.root}>
      {startLabel && <div className={styles.startLabel}>{startLabel}</div>}
      {startSection && (
        <div className={styles.startSection}>{startSection}</div>
      )}
      {icon && <div className={styles.icon}>{icon}</div>}
      <Component ref={ref} className={clsx(styles.input)} {...rest} />
      {endSection && <div className={styles.endSection}>{endSection}</div>}
      {endLabel && <div className={styles.endLabel}>{endLabel}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export default createComponent(Input);
