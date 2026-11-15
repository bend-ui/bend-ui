import { Meta, StoryObj } from '@storybook/react-vite';
import { HeartIcon } from 'lucide-react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Favorite',
    render: (props, state) => (
      <button type="button" {...props}>
        <HeartIcon
          aria-hidden="true"
          size={16}
          fill={state.pressed ? 'currentColor' : 'none'}
        />
      </button>
    ),
  },
};

export const WithText: Story = {
  args: {
    children: 'Bold',
    defaultPressed: true,
  },
};
