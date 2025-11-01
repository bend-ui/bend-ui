import { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
};

export default meta;

const fonts = [
  { label: 'Select font', value: null },
  { label: 'Sans-serif', value: 'sans' },
  { label: 'Serif', value: 'serif' },
  { label: 'Monospace', value: 'mono' },
  { label: 'Cursive', value: 'cursive' },
];

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: fonts,
  },
};

export const Multiple: Story = {
  args: {
    items: fonts,
    multiple: true,
  },
};
