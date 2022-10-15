import { forwardRef } from '@particles/primitives';
import clsx from 'clsx';
import { SXProp } from '../../styles';
import { DismissButton } from '../Button';
import { Level } from '../Level';
import { Panel } from '../Panel';
import { Stack } from '../Stack';
import { Text } from '../Text';
import useStyles from './Toast.styles';

export type ToastProps = {
  title: React.ReactNode;
  icon?: React.ReactElement;
  isLoading?: boolean;
} & SXProp;

const Toast = forwardRef<ToastProps, 'div'>((props, ref) => {
  const { children, title, ...rest } = props;
  const { styles } = useStyles();
  return (
    <Panel
      as="output"
      ref={ref}
      className={clsx(styles['root'])}
      role="status"
      {...rest}
    >
      <Level>
        <Stack>
          <Text size="lg" sx={{ fontWeight: '$medium' }}>
            {title}
          </Text>
          {children}
        </Stack>
        <DismissButton />
      </Level>
    </Panel>
  );
});

Toast.displayName = 'Toast';

export default Object.assign(Toast);
