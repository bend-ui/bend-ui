import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../styles';
import { Box } from '../Box';
import useStyles from './Media.styles';

export type MediaProps = DefaultComponentProps;

const Media = forwardRef<MediaProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { styles } = useStyles();
  return (
    <Box ref={ref} className={clsx(styles.root, className)} {...rest}>
      {children}
    </Box>
  );
});

Media.displayName = 'Media';

export type MediaImageProps = DefaultComponentProps;

const Image = forwardRef<MediaImageProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();

  return (
    <Box ref={ref} className={styles.image} {...rest}>
      {children}
    </Box>
  );
});

Image.displayName = 'Media.Image';

export type MediaContentProps = DefaultComponentProps;

const Content = forwardRef<MediaContentProps, 'div'>((props, ref) => {
  const { children, className, ...rest } = props;
  const { styles } = useStyles();

  return (
    <Box ref={ref} className={clsx(styles.content, className)} {...rest}>
      {children}
    </Box>
  );
});

Content.displayName = 'Media.Content';

export default Object.assign(Media, { Image, Content });
