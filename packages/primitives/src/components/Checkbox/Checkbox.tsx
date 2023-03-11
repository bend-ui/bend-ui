import { createComponent, forwardRef } from '../../utils';
import type { Ref } from 'react';

export type CheckboxProps = {
  wrapperProps?: Record<any, any>;
  wrapperRef?: Ref<HTMLLabelElement>;
};

const Root = forwardRef<CheckboxProps, 'input'>((props, ref) => {
  const { children, value, wrapperProps, wrapperRef, className, id, ...rest } =
    props;

  return (
    <label ref={wrapperRef} className={className} {...wrapperRef}>
      <input ref={ref} id={id} type="checkbox" value={value} hidden {...rest} />
      {children}
    </label>
  );
});

export type CheckboxIndicatorProps = React.ComponentPropsWithoutRef<'button'>;

const Indicator = forwardRef<CheckboxIndicatorProps, 'button'>((props, ref) => (
  <button ref={ref} {...props} />
));

export type CheckboxLabelProps = React.ComponentPropsWithoutRef<'label'>;

const Label = forwardRef<CheckboxLabelProps, 'span'>((props, ref) => (
  <span ref={ref} htmlFor="aCheckbox" {...props} />
));

export default createComponent(Root, { Root, Indicator, Label }, 'Checkbox');
