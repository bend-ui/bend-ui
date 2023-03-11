import { forwardRef } from '@particles/primitives';
import { useTheme } from '../../styles';
import useStyles from './Card.styles';
import type { DefaultComponentProps } from '../../styles';

export type CardImageProps = DefaultComponentProps;

export const CardImage = forwardRef<CardImageProps, 'img'>((props, ref) => {
  const { children, as: Component = 'img', ...rest } = props;
  const { theme } = useTheme();
  const { styles } = useStyles({}, { name: 'Card', theme });
  return (
    <Component ref={ref} className={styles['Image']} {...rest}>
      {children}
    </Component>
  );
});
CardImage.displayName = 'Card.Image';
