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
  'root',
);

export type CheckboxIndicatorProps = CheckboxPrimitive.Indicator.Props;

const CheckboxIndicator = withParts<CheckboxIndicatorProps>(
  CheckboxPrimitive.Indicator,
  'indicator',
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
