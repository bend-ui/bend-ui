import clsx from 'clsx';
import { SXProp } from '../../styles';
import { Box } from '../Box';
import useStyles from './Avatar.styles';
import { forwardRef } from '@particles/primitives';

export type AvatarProps = {
  src: string;
  size?: 'sm' | 'md' | 'lg';
} & SXProp;

export const Avatar = forwardRef<AvatarProps, 'img'>((props, ref) => {
  const { src, size = 'md', ...rest } = props;
  const { styles } = useStyles({ size });
  return (
    <Box className={clsx(styles['root'])}>
      <Box
        ref={ref}
        as="img"
        className={clsx(styles['img'])}
        src={src}
        alt=""
        {...rest}
      />
    </Box>
  );
});
