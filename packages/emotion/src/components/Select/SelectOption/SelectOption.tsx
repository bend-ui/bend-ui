import { forwardRef } from '@particles/primitives';
import { DefaultComponentProps } from '../../../types';
import { useDefaultProps } from '../../../theme';
import { useSelectContext } from '../SelectContext';

type SelectOptionProps = DefaultComponentProps;

export const SelectOption = forwardRef<SelectOptionProps, 'li'>(
  (props, ref) => {
    const { children, ...rest } = useDefaultProps('SelectOption', props);
    const { getOptionProps } = useSelectContext();
    return (
      <li ref={ref} {...getOptionProps()} {...rest}>
        {children}
      </li>
    );
  }
);
