import { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { checkbox } from '@particles/styled-system/recipes';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: checkbox.variantMap.size,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Enable notifications',
  },
};
