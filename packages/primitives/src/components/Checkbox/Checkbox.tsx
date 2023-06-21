import { createComponent, createContext, forwardRef } from '../../utils';
import { useCheckbox } from './useCheckbox';
import type { UseCheckboxProps } from './useCheckbox';
import type { ReactNode } from 'react';

export type CheckboxContextProps = ReturnType<typeof useCheckbox>;

export const [CheckboxContextProvider, useCheckboxContext] =
  createContext<CheckboxContextProps>('Checkbox');

export interface CheckboxProps extends UseCheckboxProps {
  children?: ReactNode;
}

const Root = forwardRef<CheckboxProps, 'div'>((props, ref) => {
  const {
    children,
    as: Component = 'div',
    id,
    isChecked,
    defaultChecked,
    onCheckedChange: onChange,
    isDisabled,
    ...rest
  } = props;
  const context = useCheckbox({
    id,
    isChecked,
    defaultChecked,
    isDisabled,
    onCheckedChange: onChange,
  });
  return (
    <CheckboxContextProvider value={context}>
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    </CheckboxContextProvider>
  );
});

export interface CheckboxInputProps {
  children?: never;
}

const Input = forwardRef<CheckboxInputProps, 'input'>((props, ref) => {
  const { value, id, ...rest } = props;
  const { getInputProps } = useCheckboxContext();

  return <input ref={ref} type="checkbox" {...getInputProps(rest)} {...rest} />;
});

export type CheckboxControlProps = React.ComponentPropsWithoutRef<'div'>;

const Control = forwardRef<CheckboxControlProps, 'div'>((props, ref) => {
  const { children, as: Component = 'div', ...rest } = props;
  const { getControlProps, isChecked } = useCheckboxContext();
  return (
    <Component ref={ref} {...getControlProps(rest)} {...rest}>
      {isChecked ? children : null}
    </Component>
  );
});

export type CheckboxLabelProps = React.ComponentPropsWithoutRef<'label'>;

const Label = forwardRef<CheckboxLabelProps, 'label'>((props, ref) => {
  const { children, as: Component = 'label', ...rest } = props;
  const { getLabelProps } = useCheckboxContext();
  return (
    <Component ref={ref} {...getLabelProps(rest)} {...rest}>
      {children}
    </Component>
  );
});

export default createComponent(
  Root,
  { Root, Input, Control, Label },
  'Checkbox'
);
