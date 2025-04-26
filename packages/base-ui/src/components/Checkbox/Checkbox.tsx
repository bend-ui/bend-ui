import { forwardRef } from 'react';
import { Checkbox as CheckboxPrimitive } from '@base-ui-components/react/checkbox';
import {
  checkbox,
  CheckboxVariantProps,
} from '@particles/styled-system/recipes';
import { CheckIcon } from 'lucide-react';

const Root = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((props, ref) => {
  return <CheckboxPrimitive.Root {...props} ref={ref} data-part="control" />;
});

const Indicator = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>((props, ref) => {
  return (
    <CheckboxPrimitive.Indicator {...props} ref={ref} data-part="indicator" />
  );
});

const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  return <label {...props} ref={ref} data-part="root" />;
});

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> &
  CheckboxVariantProps;

const Component = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  const { children, size = 'md', ...rest } = props;
  const classes = checkbox({ size });
  return (
    <Label className={classes}>
      <Root ref={ref} defaultChecked {...rest}>
        <Indicator>
          <CheckIcon />
        </Indicator>
      </Root>
      {children}
    </Label>
  );
});

export const Checkbox = Object.assign(Component, {
  Root,
  Indicator,
  Label,
});
