import { forwardRef } from 'react';
import { Checkbox as CheckboxPrimitive } from '@base-ui-components/react/checkbox';
import {
  checkbox,
  CheckboxVariantProps,
} from '@particles/styled-system/recipes';
import { CheckIcon } from 'lucide-react';
import { withParts, withRecipe } from '../../utils/with-recipe';

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

const CheckboxLabel = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  return <label {...props} ref={ref} data-part="root" />;
});

CheckboxLabel.displayName = 'Checkbox.Label';

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

Component.displayName = 'Checkbox';

export const Checkbox = Object.assign(Component, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
});
