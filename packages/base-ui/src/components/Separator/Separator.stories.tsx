import { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Separator',
  component: Separator,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', height: 40, gap: 16 }}>
      <span>Profile</span>
      <Separator orientation="vertical" />
      <span>Security</span>
    </div>
  ),
};
