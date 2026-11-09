import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from './Radio';
const meta: Meta<typeof Radio> = {
  title: 'Components/Form/Radio',
  component: Radio,
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <RadioGroup name="delivery" defaultValue="email" aria-label="Delivery">
      <Radio value="email">Email</Radio>
      <Radio value="post">Post</Radio>
      <Radio value="courier" disabled>
        Courier unavailable
      </Radio>
    </RadioGroup>
  ),
};
