import { createComponent, createContext, forwardRef } from '../../utils';
import { useRadio } from './useRadio';
import type { ReactNode } from 'react';

export type RadioContextProps = ReturnType<typeof useRadio>;

export const [RadioContextProvider, useRadioContext] =
  createContext<RadioContextProps>('Radio');

export interface RadioRootProps {
  children?: ReactNode;
  isDisabled?: boolean;
}

export const Root = forwardRef<RadioRootProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    id,
    onChange,
    defaultChecked,
    isDisabled,
    ...rest
  } = props;

  const context = useRadio({ id, defaultChecked, isDisabled });

  return (
    <RadioContextProvider value={context}>
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    </RadioContextProvider>
  );
});

export interface RadioInputProps {
  children?: never;
}

const Input = forwardRef<RadioInputProps, 'input'>((props, ref) => {
  const { ...rest } = props;
  const { getInputProps } = useRadioContext();

  return <input ref={ref} type="radio" {...getInputProps()} {...rest} />;
});

export interface RadioControlProps {
  children?: ReactNode;
}

const Control = forwardRef<RadioControlProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const { getControlProps } = useRadioContext();
  return (
    <Component ref={ref} {...getControlProps()} {...rest}>
      {children}
    </Component>
  );
});

export interface RadioLabelProps {
  children?: ReactNode;
}

const Label = forwardRef<RadioLabelProps, 'label'>((props, ref) => {
  const { children, as: Component = 'label', ...rest } = props;
  const { getLabelProps } = useRadioContext();

  return (
    <Component ref={ref} {...getLabelProps()} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(Root, { Root, Input, Control, Label }, 'Radio');
