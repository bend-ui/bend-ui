import { forwardRef } from 'react';
import { Checkbox as CheckboxPrimitive } from '@base-ui-components/react/checkbox';
import {
  checkbox,
  CheckboxVariantProps,
} from '@particles/styled-system/recipes';
import { CheckIcon } from 'lucide-react';

export type CheckboxRootProps = CheckboxPrimitive.Root.Props;

const CheckboxRoot = forwardRef<HTMLButtonElement, CheckboxRootProps>(
  (props, ref) => {
    return <CheckboxPrimitive.Root {...props} ref={ref} data-part="control" />;
  },
);

export type CheckboxIndicatorProps = CheckboxPrimitive.Indicator.Props;

const CheckboxIndicator = forwardRef<HTMLButtonElement, CheckboxIndicatorProps>(
  (props, ref) => {
    return (
      <CheckboxPrimitive.Indicator {...props} ref={ref} data-part="indicator" />
    );
  },
);

const CheckboxLabel = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  return <label {...props} ref={ref} data-part="root" />;
});

export type CheckboxProps = CheckboxRootProps & CheckboxVariantProps;

const Component = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  const { children, size = 'md', ...rest } = props;
  const classes = checkbox({ size });
  return (
    <CheckboxLabel className={classes}>
      <CheckboxRoot ref={ref} defaultChecked {...rest}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      {children}
    </CheckboxLabel>
  );
});

export const Checkbox = Object.assign(Component, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
});
