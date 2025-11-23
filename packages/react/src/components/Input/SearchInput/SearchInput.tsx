import { SearchIcon, XIcon } from 'lucide-react';
import { Input } from '../Input';
import type { InputProps } from '../Input';
import { particles } from '../../factory';

export interface SearchInputProps extends InputProps {
  onClear?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Component = (props: SearchInputProps) => {
  const { ref, onClear, ...rest } = props;

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert('this should clear the input');
    onClear?.(event);
  };

  return (
    <Input.Root {...rest}>
      <Input.Wrapper>
        <Input.Icon>
          <SearchIcon />
        </Input.Icon>
        <Input.Input ref={ref} />
        <particles.button onClick={handleClear}>
          <Input.Icon>
            <XIcon />
          </Input.Icon>
        </particles.button>
      </Input.Wrapper>
    </Input.Root>
  );
};

export const SearchInput = Component;
