import { Checkbox as ArkCheckbox } from '@ark-ui/react';
import { CheckIcon } from 'lucide-react';
import { CheckboxVariantProps } from '@bend-ui/styled-system/recipes';
import { checkbox } from '@bend-ui/styled-system/recipes';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

const { withProvider, withContext } = createStyleContext(checkbox);

export type CheckboxRootProps = ArkCheckbox.RootProps & CheckboxVariantProps;

const CheckboxRoot = withProvider(ArkCheckbox.Root, 'root');

export type CheckboxLabelProps = ArkCheckbox.LabelProps;

const CheckboxLabel = withContext(ArkCheckbox.Label, 'label');

export type CheckboxControlProps = ArkCheckbox.ControlProps;

const CheckboxControl = withContext(ArkCheckbox.Control, 'control');

export type CheckboxIndicatorProps = ArkCheckbox.IndicatorProps;

const CheckboxIndicator = withContext(ArkCheckbox.Indicator, 'indicator');

export type CheckboxHiddenInputProps = ArkCheckbox.HiddenInputProps;

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
