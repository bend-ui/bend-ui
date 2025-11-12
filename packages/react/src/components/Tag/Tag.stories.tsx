import { tag } from '@particles/styled-system/recipes';
import { Tag } from './Tag';
import { Stack } from '../Stack';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Data/Tag',
  component: Tag,
  argTypes: {
    size: {
      control: 'select',
      options: tag.variantMap.size,
    },
    variant: {
      control: 'select',
      options: tag.variantMap.variant,
    },
    palette: {
      control: 'select',
      options: tag.variantMap.palette,
    },
  },
  args: {
    children: 'Tag',
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

export const Base: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {tag.variantMap.size.map((size) => (
        <Tag key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {tag.variantMap.variant.map((variant) => (
        <Tag key={variant} {...args} variant={variant} />
      ))}
    </Stack>
  ),
};

export const Palettes: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {tag.variantMap.palette.map((palette) => (
        <Tag key={palette} {...args} palette={palette} />
      ))}
    </Stack>
  ),
};
