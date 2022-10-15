import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import useStyles from './Media.styles';

export type MediaImageProps = DefaultComponentProps;

export const MediaImage = forwardRef<MediaImageProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    className,
    ...rest
  } = useDefaultProps('MediaImage', props);

  const { styles } = useStyles({}, { name: 'Media' });

  return (
    <Component ref={ref} className={clsx(styles.image, className)} {...rest}>
      {children}
    </Component>
  );
});
