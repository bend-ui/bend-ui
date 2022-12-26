import { forwardRef } from 'react';

export type CheckboxProps = React.ComponentPropsWithoutRef<'input'>;

const Root = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, ...rest } = props;

  // TODO: use warn function
  if (rest.checked === undefined) {
    console.warn('You have forget to use {...inputProps} on the element');
  }
  return (
    <>
      {children}
      <input
        id="aCheckbox"
        ref={ref}
        type="checkbox"
        hidden
        readOnly
        style={{ visibility: 'hidden' }}
        {...rest}
      />
    </>
  );
});

export type CheckboxIndicatorProps = React.ComponentPropsWithoutRef<'button'>;

const Indicator = forwardRef<HTMLButtonElement, CheckboxIndicatorProps>(
  (props, ref) => {
    return <button ref={ref} {...props} />;
  }
);

export type CheckboxLabelProps = React.ComponentPropsWithoutRef<'label'>;

const Label = forwardRef<HTMLLabelElement, CheckboxLabelProps>((props, ref) => {
  return <label ref={ref} htmlFor="aCheckbox" {...props} />;
});

export const Checkbox = Object.assign(Root, { Indicator, Label });
