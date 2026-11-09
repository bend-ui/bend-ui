import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './Field';
import { Form } from '../Form';
const meta: Meta<typeof Field> = {
  title: 'Components/Form/Field',
  component: Field,
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <Form.Root onSubmit={(event) => event.preventDefault()}>
      <Field name="email">
        <Field.Label>Email</Field.Label>
        <Field.Description>Your work address</Field.Description>
        <Field.Control required type="email" autoComplete="email" />
        <Field.Error match="valueMissing">Enter an email address.</Field.Error>
      </Field>
      <button type="submit">Validate</button>
    </Form.Root>
  ),
};
