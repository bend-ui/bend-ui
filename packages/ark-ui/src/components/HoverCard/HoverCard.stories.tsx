import { Meta, StoryObj } from '@storybook/react-vite';
import { HoverCard } from './HoverCard';

const meta: Meta<typeof HoverCard> = {
  title: 'HoverCard',
  component: HoverCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
