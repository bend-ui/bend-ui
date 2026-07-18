import { Checkbox as ArkCheckbox } from '@ark-ui/react';
import { CheckIcon } from 'lucide-react';
import { CheckboxVariantProps } from '@bend-ui/styled-system/recipes';
import { checkbox } from '@bend-ui/styled-system/recipes';
import { withParts, withRecipe } from '../../utils';

export type CheckboxRootProps = ArkCheckbox.RootProps & CheckboxVariantProps;

const CheckboxRoot = withRecipe<CheckboxRootProps>(
  ArkCheckbox.Root,
  checkbox,
  'root',
);

export type CheckboxLabelProps = ArkCheckbox.LabelProps;

const CheckboxLabel = withParts<CheckboxLabelProps>(ArkCheckbox.Label, 'label');

export type CheckboxControlProps = ArkCheckbox.ControlProps;

const CheckboxControl = withParts<CheckboxControlProps>(
  ArkCheckbox.Control,
  'control',
);

export type CheckboxIndicatorProps = ArkCheckbox.IndicatorProps;

const CheckboxIndicator = withParts<CheckboxIndicatorProps>(
  ArkCheckbox.Indicator,
  'indicator',
);

export type CheckboxHiddenInputProps = ArkCheckbox.HiddenInputProps;

const CheckboxHiddenInput = withParts<CheckboxHiddenInputProps>(
  ArkCheckbox.HiddenInput,
  'hiddenInput',
);

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
