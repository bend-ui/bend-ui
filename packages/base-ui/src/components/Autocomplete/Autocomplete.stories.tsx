import { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Form/Autocomplete',
  component: Autocomplete,
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
