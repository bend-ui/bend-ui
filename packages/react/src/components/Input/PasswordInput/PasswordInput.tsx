'use client';

import { useState } from 'react';
import { Input, InputProps } from '../Input';
import { bend } from '../../factory';
import { EyeIcon } from 'lucide-react';

export interface PasswordInputProps extends Omit<InputProps, 'onToggle'> {
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Component = (props: PasswordInputProps) => {
  const { ref, onToggle, ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowPassword(!showPassword);
    onToggle?.(event);
  };

  return (
    <Input.Root {...rest}>
      <Input.Wrapper>
        <Input.Input ref={ref} type={showPassword ? 'text' : 'password'} />
        <bend.button onClick={handleToggle}>
          <Input.Icon>
            <EyeIcon />
          </Input.Icon>
        </bend.button>
      </Input.Wrapper>
    </Input.Root>
  );
};

Component.displayName = 'PasswordInput';

export const PasswordInput = Component;
