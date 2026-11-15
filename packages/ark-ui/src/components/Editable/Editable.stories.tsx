import { Meta, StoryObj } from '@storybook/react-vite';
import { Editable } from './Editable';

const meta: Meta<typeof Editable> = {
  title: 'Editable',
  component: Editable,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Editable placeholder="Placeholder" {...args}>
      <Editable.Label>Label</Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
    </Editable>
  ),
};
