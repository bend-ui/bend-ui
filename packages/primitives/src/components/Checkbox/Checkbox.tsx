import { createComponent, forwardRef } from '../../utils';

export type CheckboxProps = React.ComponentPropsWithoutRef<'input'>;

const Root = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { children, value, ...rest } = props;

  // TODO: use warn function
  if (rest.checked === undefined) {
    console.warn('You have forget to use {...inputProps} on the element');
  }
  return (
    <label>
      <input id="aCheckbox" ref={ref} type="checkbox" value={value} {...rest} />
      {children}
    </label>
  );
});

export type CheckboxIndicatorProps = React.ComponentPropsWithoutRef<'button'>;

const Indicator = forwardRef<CheckboxIndicatorProps, 'button'>((props, ref) => {
  return <button ref={ref} {...props} />;
});

export type CheckboxLabelProps = React.ComponentPropsWithoutRef<'label'>;

const Label = forwardRef<CheckboxLabelProps, 'span'>((props, ref) => {
  return <span ref={ref} htmlFor="aCheckbox" {...props} />;
});

export default createComponent(Root, { Root, Indicator, Label }, 'Checkbox');
