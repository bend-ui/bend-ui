import { Box } from '../Box';
import { Input } from '../Input';

export interface ComboboxProps {
  children?: React.ReactNode;
}

const Combobox = (props: ComboboxProps) => {
  const { children } = props;
  return (
    <Box>
      <Input />
      {children}
    </Box>
  );
};

export default Object.assign(Combobox, {});
