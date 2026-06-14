import { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { SearchIcon } from 'lucide-react';
import { Box, Stack } from '@particles/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    icon: <SearchIcon />,
  },
};

export const LayoutWidthControl: Story = {
  render: () => (
    <Stack gap="3">
      <Box maxW="320px">
        <Input placeholder="Fixed wrapper width" />
      </Box>
      <Box
        display="grid"
        style={{ gridTemplateColumns: 'minmax(180px, 1fr) auto' }}
        gap="2"
      >
        <Input icon={<SearchIcon />} placeholder="Search in a grid row" />
        <Input placeholder="Short code" />
      </Box>
    </Stack>
  ),
};
