import { createComponent, forwardRef } from '../../utils';
import type { ReactNode } from 'react';

export interface TextFieldRootProps {
  children?: ReactNode;
}

const Root = forwardRef<TextFieldRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export interface TextFieldInputProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
}

const Input = forwardRef<TextFieldInputProps, 'input'>((props, ref) => {
  const { as: Component = 'input', ...rest } = props;
  return <Component ref={ref} {...rest} />;
});

export default createComponent(Root, { Root, Input }, 'TextField');
