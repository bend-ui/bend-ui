import { createComponent, forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { Box } from '../Box';
import useStyles from './Avatar.styles';
import type { DefaultComponentProps } from '../../types';

export type AvatarProps = DefaultComponentProps & {
  src: HTMLImageElement['src'];
  alt: HTMLImageElement['alt'];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

const Avatar = forwardRef<AvatarProps, 'img'>((props, ref) => {
  const {
    as = 'img',
    src,
    alt,
    size = 'md',
    ...rest
  } = useDefaultProps('Avatar', props);
  const { styles } = useStyles({ size });
  return (
    <Box
      as={as}
      ref={ref}
      src={src}
      alt={alt}
      className={styles.root}
      {...rest}
    />
  );
});

Avatar.displayName = 'Avatar';

export default createComponent(Avatar);
