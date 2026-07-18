import { Radio } from './Radio';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'Radio',
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Base: Story = {
  args: {},
};
