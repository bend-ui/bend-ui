import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Field } from '../Field';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Mimics a server that rejects the example domain after a short delay. */
async function submitHomepage(value: string) {
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

  return { error: undefined };
}

function ServerValidationForm() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <Form
      errors={errors}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setLoading(true);
        const response = await submitHomepage(formData.get('url') as string);
        setErrors({ url: response.error });
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
    </Form>
  );
}

export const ServerValidation: Story = {
  render: () => <ServerValidationForm />,
};
