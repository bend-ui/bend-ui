import { forwardRef } from '@particles/primitives';
import { useTheme } from '../../styles';
import useStyles from './Card.styles';

export interface CardHeaderProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md';
}

export const CardHeader = forwardRef<CardHeaderProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { theme } = useTheme();
  const { styles } = useStyles({}, { name: 'Card', theme });
  return (
    <div ref={ref} className={styles['header']} {...rest}>
      {children}
    </div>
  );
});
CardHeader.displayName = 'Card.Header';
