import { TbCaretRight } from 'react-icons/tb';
import { Breadcrumbs } from './';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Base: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Products</Breadcrumbs.Item>
      <Breadcrumbs.Item>Category</Breadcrumbs.Item>
      <Breadcrumbs.Item>Product</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const CustomSeparator: Story = {
  ...Base,
  args: {
    separator: '>',
  },
};

export const CustomIconSeparator: Story = {
  ...Base,
  args: {
    separator: <TbCaretRight />,
  },
};
