import { forwardRef } from '@particles/primitives';
import { useDefaultProps } from '../../../theme';
import { useSelectContext } from '../SelectContext';
import type { DefaultComponentProps } from '../../../types';

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
