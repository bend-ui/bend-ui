import { forwardRef } from '@particles/primitives';
import { Group } from '../../Group';
import type { DefaultComponentProps } from '../../../styles';
import type { ButtonProps } from '../Button';

export type ButtonGroupProps = ButtonProps & DefaultComponentProps;

export const ButtonGroup = forwardRef<ButtonGroupProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Group ref={ref} {...rest}>
      {children}
    </Group>
  );
});
