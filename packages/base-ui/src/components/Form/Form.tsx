import { forwardRef } from 'react';
import { Form as FormPrimitive } from '@base-ui-components/react/form';
import { form } from '@particles/styled-system/recipes';

const Root = FormPrimitive;

export type FormProps = React.ComponentPropsWithoutRef<typeof Root>;

const Component = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return <Root ref={ref} {...props} />;
});

export const Form = Object.assign(Component, {});
