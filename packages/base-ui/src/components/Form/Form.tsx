import { Form as FormPrimitive } from '@base-ui/react/form';

export type FormProps<
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> = FormPrimitive.Props<FormValues>;

function FormRoot<
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>(props: FormProps<FormValues>) {
  return <FormPrimitive<FormValues> {...props} />;
}

Object.assign(FormRoot, { displayName: 'Form' });

export const Form = Object.assign(FormRoot, {
  Root: FormRoot,
});
