import clsx from 'clsx';
import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import useStyles from './Media.styles';
import { MediaContent } from './MediaContent';
import { MediaImage } from './MediaImage';
import type { DefaultComponentProps } from '../../types';

export type MediaProps = DefaultComponentProps;

const Media = forwardRef<MediaProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    className,
    ...rest
  } = useDefaultProps('Media', props);

  const { styles } = useStyles({}, { name: 'Media' });

  return (
    <Component ref={ref} className={clsx(styles.root, className)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Media, {
  Image: MediaImage,
  Content: MediaContent,
});
