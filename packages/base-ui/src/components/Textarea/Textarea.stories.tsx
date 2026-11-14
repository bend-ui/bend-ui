import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';
import { Field } from '../Field';
const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <Field>
      <Field.Label>Notes</Field.Label>
      <Textarea rows={4} defaultValue={'First line\nSecond line'} />
    </Field>
  ),
};
