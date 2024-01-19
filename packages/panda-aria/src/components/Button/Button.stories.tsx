import { button } from '@particles/panda-system/recipes';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const { palette, size, variant } = button.variantMap;

export const Base: Story = {};

export const Variants: Story = {
  render: (args) => (
    <>
      {variant.map((value) => (
        <Button key={value} {...args} variant={value} />
      ))}
    </>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <>
      {size.map((value) => (
        <Button key={value} {...args} size={value} />
      ))}
    </>
  ),
};

export const Palettes: Story = {
  render: (args) => (
    <>
      {palette.map((value) => (
        <Button key={value} {...args} palette={value} />
      ))}
    </>
  ),
};
