import { Meta, StoryObj } from '@storybook/react-vite';
import { Clipboard } from './Clipboard';

const meta: Meta<typeof Clipboard> = {
  title: 'Clipboard',
  component: Clipboard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
