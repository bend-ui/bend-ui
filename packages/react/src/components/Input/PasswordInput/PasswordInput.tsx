'use client';

import { forwardRef, useState } from 'react';
import { Input, InputProps } from '../Input';
import { particles } from '../../factory';
import { EyeIcon } from 'lucide-react';

export interface PasswordInputProps extends Omit<InputProps, 'onToggle'> {
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Component = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const { onToggle, ...rest } = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
      setShowPassword(!showPassword);
      onToggle?.(event);
    };

    return (
      <Input.Root {...rest}>
        <Input.Wrapper>
          <Input.Input ref={ref} type={showPassword ? 'text' : 'password'} />
          <particles.button onClick={handleToggle}>
            <Input.Icon>
              <EyeIcon />
            </Input.Icon>
          </particles.button>
        </Input.Wrapper>
      </Input.Root>
    );
  },
);

Component.displayName = 'PasswordInput';

export const PasswordInput = Component;
