import clsx from 'clsx';
import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import useStyles from './Media.styles';

export type MediaContentProps = DefaultComponentProps;

export const MediaContent = forwardRef<MediaContentProps, 'div'>(
  (props, ref) => {
    const {
      children,
      as: Component = 'div',
      className,
      ...rest
    } = useDefaultProps('MediaContent', props);

    const { styles } = useStyles({}, { name: 'Media' });

    return (
      <Component
        ref={ref}
        className={clsx(styles.content, className)}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
