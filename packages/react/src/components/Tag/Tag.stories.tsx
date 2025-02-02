import { tag } from '@particles/styled-system/recipes';
import { Tag } from './Tag';
import type { Meta, StoryObj } from '@storybook/react';

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
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  args: {
    children: 'Tag',
  },
};
