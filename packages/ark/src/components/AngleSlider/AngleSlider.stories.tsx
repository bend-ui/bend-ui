import { LuChevronDown } from 'react-icons/lu';
import { AngleSlider } from './AngleSlider';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/AngleSlider',
  component: AngleSlider,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AngleSlider>;

export default meta;

type Story = StoryObj<typeof AngleSlider>;

export const Base: Story = {};
