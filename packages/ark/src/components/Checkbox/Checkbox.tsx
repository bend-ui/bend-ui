import { Checkbox as ArkCheckbox } from '@ark-ui/react';
import { CheckIcon } from 'lucide-react';
import { CheckboxVariantProps } from '@particles/styled-system/recipes';
import { checkbox } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';

export type CheckboxRootProps = ArkCheckbox.RootProps & CheckboxVariantProps;

const CheckboxRoot = forwardRef<HTMLLabelElement, CheckboxRootProps>(
  (props, ref) => {
    const [variantProps, rest] = checkbox.splitVariantProps(props);
    const classes = checkbox(variantProps);
    return <ArkCheckbox.Root ref={ref} {...rest} className={classes} />;
  },
);

const CheckboxLabel = ArkCheckbox.Label;
const CheckboxControl = ArkCheckbox.Control;
const CheckboxIndicator = ArkCheckbox.Indicator;
const CheckboxHiddenInput = ArkCheckbox.HiddenInput;

export type CheckboxProps = CheckboxRootProps;

const Component = (props: CheckboxProps) => {
  const { children, ...rest } = props;
  return (
    <CheckboxRoot {...rest}>
      <CheckboxControl>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxHiddenInput />
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxRoot>
  );
};

Component.displayName = 'Checkbox';

export const Checkbox = Object.assign(Component, {
  Root: CheckboxRoot,
  Label: CheckboxLabel,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  HiddenInput: CheckboxHiddenInput,
});
