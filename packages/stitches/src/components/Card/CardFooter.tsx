import { forwardRef } from '@particles/primitives';
import { useTheme } from '../../styles';
import useStyles from './Card.styles';

export interface CardFooterProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md';
}

export const CardFooter = forwardRef<CardFooterProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { theme } = useTheme();
  const { styles } = useStyles({}, { name: 'Card', theme });
  return (
    <div ref={ref} className={styles['footer']} {...rest}>
      {children}
    </div>
  );
});
CardFooter.displayName = 'Card.Footer';
