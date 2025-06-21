import { Carousel } from './Carousel';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Data Display/Carousel',
  component: Carousel,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Base: Story = {};
