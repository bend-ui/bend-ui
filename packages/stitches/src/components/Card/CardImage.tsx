import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps, useTheme } from '../../styles';
import useStyles from './Card.styles';

export type CardImageProps = DefaultComponentProps;

export const CardImage = forwardRef<CardImageProps, 'img'>((props, ref) => {
  const { children, as = 'img', ...rest } = props;
  const { theme } = useTheme();
  const { styles } = useStyles({}, { name: 'Card', theme });
  return (
    <div as={as} ref={ref} className={styles['Image']} {...rest}>
      {children}
    </div>
  );
});
CardImage.displayName = 'Card.Image';
