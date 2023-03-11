import { system } from '../../system';
import { MediaObject } from '../MediaObject';
import useStyles from './Toast.styles';
import type { SystemProps } from '../../system';

export type ToastTitleProps = SystemProps;

const Title = (props: ToastTitleProps) => {
  const { children, ...rest } = props;
  return <MediaObject.Title {...rest}>{children}</MediaObject.Title>;
};

Title.displayName = 'Toast.Title';

export type ToastDescriptionProps = SystemProps;

const Description = (props: ToastDescriptionProps) => {
  const { children, ...rest } = props;
  return <MediaObject.Body {...rest}>{children}</MediaObject.Body>;
};

Description.displayName = 'Toast.Description';

type ToastProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
} & SystemProps;

export const Toast = (props: ToastProps) => {
  const { children, icon, title, description, ...rest } = props;
  const { styles } = useStyles();
  return (
    <system.div sx={styles.root} {...rest}>
      <MediaObject>
        {icon && <MediaObject.Image>{icon}</MediaObject.Image>}
        {children ?? (
          <>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </>
        )}
      </MediaObject>
    </system.div>
  );
};

export default Object.assign(Toast, { Title, Description });
