import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../../styles';
import { Group } from '../../Group';
import { ButtonProps } from '../Button';

export type ButtonGroupProps = ButtonProps & DefaultComponentProps;

export const ButtonGroup = forwardRef<ButtonGroupProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Group ref={ref} {...rest}>
      {children}
    </Group>
  );
});
