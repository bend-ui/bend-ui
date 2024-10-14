import { UserIcon } from 'lucide-react';
import { Field } from './';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Forms/Field',
  component: Field,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    invalid: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      subtitle:
        'Field is a component that wraps an input and provides a label, helper text, and error text. It also provides a context for the input to be used in a form.',
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Input />
    </Field>
  ),
  args: {
    label: 'Label',
    helperText: 'Helper text',
    errorText: 'Error text',
  },
};

export const Composed: Story = {
  render: () => (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.HelperText>Helper text</Field.HelperText>
      <Field.ErrorText>Error text</Field.ErrorText>
    </Field.Root>
  ),
};

export const Invalid: Story = {
  ...Base,
  args: {
    ...Base.args,
    invalid: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Input icon={<UserIcon />} />
    </Field>
  ),
  args: {
    label: 'Label',
    helperText: 'Helper text',
    errorText: 'Error text',
  },
};

export const Textarea: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Textarea />
    </Field>
  ),
  args: {
    label: 'Label',
    helperText: 'Helper text',
    errorText: 'Error text',
  },
};
