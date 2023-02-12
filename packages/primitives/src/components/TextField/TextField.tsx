import { ReactNode } from 'react';
import { createComponent, forwardRef } from '../../utils';

export type TextFieldRootProps = {
  children?: ReactNode;
};

const Root = forwardRef<TextFieldRootProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export type TextFieldInputProps = {
  isDisabled?: boolean;
  isInvalid?: boolean;
};

const Input = forwardRef<TextFieldInputProps, 'input'>((props, ref) => {
  const { as: Component = 'input', ...rest } = props;
  return <Component ref={ref} {...rest} />;
});

export default createComponent(Root, { Root, Input }, 'TextField');
