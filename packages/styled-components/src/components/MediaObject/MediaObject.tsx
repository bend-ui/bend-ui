import { system } from '../../system';
import useStyles from './MediaObject.styles';
import type { SystemProps } from '../../system';

type MediaObjectImageProps = SystemProps;

const Image = (props: MediaObjectImageProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div sx={styles.image} {...rest}>
      {children}
    </system.div>
  );
};

type MediaObjectTitleProps = SystemProps;

const Title = (props: MediaObjectTitleProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div sx={styles.title} {...rest}>
      {children}
    </system.div>
  );
};

type MediaObjectBodyProps = SystemProps;

const Body = (props: MediaObjectBodyProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div sx={styles.body} {...rest}>
      {children}
    </system.div>
  );
};

type MediaObjectProps = SystemProps;

const MediaObject = (props: MediaObjectProps) => {
  const { children, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div sx={styles.root} {...rest}>
      {children}
    </system.div>
  );
};

export default Object.assign(MediaObject, {
  Image,
  Title,
  Body,
});
