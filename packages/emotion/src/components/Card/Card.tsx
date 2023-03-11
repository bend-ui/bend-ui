import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import useStyles from './Card.styles';
import type { DefaultComponentProps } from '../../types';

export type CardProps = DefaultComponentProps;

const Card = forwardRef<CardProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    ...rest
  } = useDefaultProps('Card', props);
  const { styles } = useStyles({}, { name: 'Card' });
  return (
    <Component ref={ref} className={styles.root} {...rest}>
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

export default createComponent(Card);
