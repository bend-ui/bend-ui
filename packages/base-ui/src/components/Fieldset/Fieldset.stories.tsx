import { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from '../Field';
import { Fieldset } from './Fieldset';

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Form/Fieldset',
  component: Fieldset,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    legend: 'Billing details',
    children: (
      <>
        <Field.Root>
          <Field.Label>Company</Field.Label>
          <Field.Control placeholder="Enter company name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Tax ID</Field.Label>
          <Field.Control placeholder="Enter fiscal number" />
        </Field.Root>
      </>
    ),
  },
};
