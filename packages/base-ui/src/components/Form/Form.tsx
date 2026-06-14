import * as React from 'react';
import { Form as FormPrimitive } from '@base-ui/react/form';
import { Field } from '../Field';
import { Button } from '@bend-ui/react';

const FormRoot = FormPrimitive;

type FormProps = React.ComponentProps<typeof FormPrimitive>;

const Component = (props: FormProps) => {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return (
    <FormPrimitive
      errors={errors}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('url') as string;

        setLoading(true);
        const response = await submitForm(value);
        const serverErrors = {
          url: response.error,
        };

        setErrors(serverErrors);
        setLoading(false);
      }}
    >
      <Field.Root name="url">
        <Field.Label>Homepage</Field.Label>
        <Field.Control
          type="url"
          required
          defaultValue="https://example.com"
          placeholder="https://example.com"
          pattern="https?://.*"
        />
        <Field.Error />
      </Field.Root>
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
    </FormPrimitive>
  );
};

Component.displayName = 'Form';

async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const url = new URL(value);

    if (url.hostname.endsWith('example.com')) {
      return { error: 'The example domain is not allowed' };
    }
  } catch {
    return { error: 'This is not a valid URL' };
  }

  return { success: true };
}

export const Form = Object.assign(Component, {
  Root: FormRoot,
});
