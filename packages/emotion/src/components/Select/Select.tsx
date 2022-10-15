import { TbChevronDown } from 'react-icons/tb';
import {
  createComponent,
  forwardRef,
  useDisclosure,
  useSelect,
} from '@particles/primitives';
import { useDefaultProps } from '../../theme';
import { DefaultComponentProps } from '../../types';
import { Input, InputProps } from '../Input';
import { Box } from '../Box';
import { SelectProvider } from './SelectContext';
import { SelectOption } from './SelectOption/SelectOption';

type SelectProps = DefaultComponentProps &
  InputProps & { children?: React.ReactNode };

const Select = forwardRef<SelectProps, 'input'>((props, ref) => {
  const { children, ...rest } = useDefaultProps('Select', props);
  const { isOpen, toggle } = useDisclosure();
  const { getListboxProps, getTriggerProps, getOptionProps } = useSelect({
    isOpen,
    onOpenChange: toggle,
  });
  const context = { getOptionProps };

  return (
    <SelectProvider value={context}>
      <Input
        ref={ref}
        {...getTriggerProps()}
        endSection={
          <Box sx={{ width: '36px' }}>
            <TbChevronDown />
          </Box>
        }
        {...rest}
      />
      {isOpen && (
        <div {...getListboxProps()}>
          <ul>{children}</ul>
        </div>
      )}
    </SelectProvider>
  );
});

export default createComponent(Select, { Option: SelectOption });
