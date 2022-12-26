import { createComponent, forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { useDefaultProps, useTheme } from '../../styles';
import useStyles from './Card.styles';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

export interface CardProps {
  variant?: 'solid' | 'outline' | 'subtle';
  palette?: 'primary' | 'danger';
}

export const Card = forwardRef<CardProps, 'div'>((props, ref) => {
  const {
    children,
    className,
    variant = 'solid',
    palette = 'primary',
    ...rest
  } = useDefaultProps('Card', props);
  const { theme } = useTheme();

  const { styles } = useStyles({ variant, palette }, { name: 'Card', theme });
  return (
    <div className={clsx(styles['root'], className)} ref={ref} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default createComponent(Card, {
  Header: CardHeader,
  Footer: CardFooter,
});
