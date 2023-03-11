import { useMemo } from 'react';
import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../../theme';
import { Group } from '../../Group';
import { ButtonGroupProvider } from './ButtonGroupProvider';
import type { DefaultComponentProps } from '../../../types';
import type { ButtonProps } from '../Button';

export type ButtonGroupProps = DefaultComponentProps &
  Pick<ButtonProps, 'size' | 'isRounded' | 'palette' | 'variant'>;

const ButtonGroup = forwardRef<ButtonGroupProps, 'div'>((props, ref) => {
  const { children, size, isRounded, palette, variant, ...rest } =
    useDefaultProps('ButtonGroup', props);
  const context = useMemo(
    () => ({ size, isRounded, palette, variant }),
    [isRounded, palette, size, variant]
  );
  return (
    <ButtonGroupProvider value={context}>
      <Group ref={ref} {...rest}>
        {children}
      </Group>
    </ButtonGroupProvider>
  );
});

export default ButtonGroup;
