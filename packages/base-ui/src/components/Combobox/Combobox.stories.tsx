import { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox } from './Combobox';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Form/Combobox',
  component: Combobox,
};

export default meta;

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
];

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: fruits,
  },
};

export const Multiple: Story = {
  args: {
    items: fruits,
    multiple: true,
  },
};
