import { createListCollection, Select } from '.';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Forms/Select',
  component: Select,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: (args) => <Select {...args} />,
  args: {
    label: 'Framework',
    placeholder: 'Select a Framework',
    collection: createListCollection({ items: ['React', 'Vue', 'Angular'] }),
  },
};
