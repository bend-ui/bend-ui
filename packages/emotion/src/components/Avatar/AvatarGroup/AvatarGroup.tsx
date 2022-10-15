import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../../theme';
import { DefaultComponentProps } from '../../../types';
import { Group } from '../../Group';

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
