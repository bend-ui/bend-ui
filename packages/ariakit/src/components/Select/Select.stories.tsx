import { Select } from './Select';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: (args) => (
    <Select.Provider defaultValue="Apple">
      <Select.Label>Favorite fruit</Select.Label>
      <Select.Root />
      <Select.Popover gutter={4} sameWidth>
        <Select.Item value="Apple" />
        <Select.Item value="Banana" />
        <Select.Item disabled value="Grape" />
        <Select.Item value="Orange" />
      </Select.Popover>
    </Select.Provider>
  ),
  args: {},
};
