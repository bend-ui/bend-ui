import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { useDefaultProps, useTheme } from '../../styles';
import useStyles from './Card.styles';

export interface CardProps {
  variant?: 'solid' | 'outline' | 'subtle';
  palette?: 'primary' | 'danger';
}

const defaultProps = { variant: 'solid', palette: 'primary' };

export const Card = forwardRef<CardProps, 'div'>((props, ref) => {
  const { children, className, variant, palette, ...rest } = useDefaultProps(
    'Card',
    defaultProps,
    props
  );
  const { theme } = useTheme();

  const { styles } = useStyles({ variant, palette }, { name: 'Card', theme });
  return (
    <div className={clsx(styles['root'], className)} ref={ref} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

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

export default Object.assign(Card, { Header: CardHeader, Footer: CardFooter });
