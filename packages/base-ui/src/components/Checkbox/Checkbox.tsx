import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import {
  checkbox,
  CheckboxVariantProps,
} from '@bend-ui/styled-system/recipes';
import { CheckIcon } from 'lucide-react';
import { withParts, withRecipe } from '@bend-ui/react/factory';

export type CheckboxRootProps = CheckboxPrimitive.Root.Props;

const CheckboxRoot = withRecipe<CheckboxRootProps>(
  CheckboxPrimitive.Root,
  checkbox,
  'control',
) as unknown as typeof CheckboxPrimitive.Root;

export type CheckboxIndicatorProps = CheckboxPrimitive.Indicator.Props;

const CheckboxIndicator = withParts<CheckboxIndicatorProps>(
  CheckboxPrimitive.Indicator,
  'indicator',
) as unknown as typeof CheckboxPrimitive.Indicator;

const CheckboxLabel = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props} data-part="root" />;
};

export type CheckboxProps = CheckboxRootProps & CheckboxVariantProps;

const Component = (props: CheckboxProps) => {
  const { children, size = 'md', ...rest } = props;
  const classes = checkbox({ size });
  return (
    <CheckboxLabel className={classes}>
      <CheckboxRoot defaultChecked {...rest}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      {children}
    </CheckboxLabel>
  );
};

Component.displayName = 'Checkbox';

export const Checkbox = Object.assign(Component, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
});
