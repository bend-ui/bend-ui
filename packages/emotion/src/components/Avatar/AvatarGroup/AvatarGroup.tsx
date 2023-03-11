import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../../theme';
import { Group } from '../../Group';
import type { DefaultComponentProps } from '../../../types';

type AvatarGroupProps = DefaultComponentProps;

const AvatarGroup = forwardRef<AvatarGroupProps, 'div'>((props, ref) => {
  const { children, ...rest } = useDefaultProps('AvatarGroup', props);
  return (
    <Group ref={ref} {...rest}>
      {children}
    </Group>
  );
});

export default AvatarGroup;
