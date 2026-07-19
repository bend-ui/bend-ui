import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { checkbox, CheckboxVariantProps } from '@bend-ui/styled-system/recipes';
import { CheckIcon } from 'lucide-react';
import { createStyleContext } from '@bend-ui/styled-system/jsx';

export type CheckboxRootProps = CheckboxPrimitive.Root.Props;

const { withProvider, withContext } = createStyleContext(checkbox);

const CheckboxRoot = withProvider(CheckboxPrimitive.Root, 'control');

export type CheckboxIndicatorProps = CheckboxPrimitive.Indicator.Props;

const CheckboxIndicator = withContext(
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
    <CheckboxLabel className={classes.root}>
      <CheckboxRoot defaultChecked size={size} {...rest}>
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
