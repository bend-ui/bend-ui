import { Carousel } from './Carousel';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Base: Story = {};
