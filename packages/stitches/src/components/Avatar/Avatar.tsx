import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { Box } from '../Box';
import useStyles from './Avatar.styles';
import type { DefaultComponentProps } from '../../styles';

export type AvatarProps = {
  src: string;
  size?: 'sm' | 'md' | 'lg';
} & DefaultComponentProps;

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
