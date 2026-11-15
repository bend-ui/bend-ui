import { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 25,
    'aria-label': 'Volume',
  },
};

export const Range: Story = {
  args: {
    defaultValue: [20, 60],
    'aria-label': 'Price range',
  },
};
