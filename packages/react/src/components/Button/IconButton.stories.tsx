import { button } from '@particles/styled-system/recipes';
import { IconButton } from './';
import { Stack } from '../Stack';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlusIcon } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Controls/IconButton',
  component: IconButton,
  tags: ['alpha'],
  args: {
    children: 'IconButton',
    icon: <PlusIcon />,
  },
  argTypes: {
    children: {
      description: 'The button content',
      control: 'text',
    },
    palette: {
      control: 'select',
      options: button.variantMap.palette,
      description: 'The color palette for the button',
      defaultValue: 'default',
    },
    variant: {
      control: 'select',
      options: button.variantMap.variant,
      description: 'The button variant',
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: button.variantMap.size,
      description: 'The button size',
      defaultValue: 'md',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** The default button styles */
export const Base: Story = {};

/** Primary styles for the button */
export const Primary: Story = {
  args: { palette: 'primary' },
};

/** Danger styles for the button */
export const Danger: Story = {
  args: {
    palette: 'danger',
  },
};

export const Palette: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {button.variantMap.palette.map((palette) => (
        <IconButton key={palette} {...args} palette={palette} />
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {button.variantMap.variant.map((variant) => (
        <IconButton key={variant} {...args} variant={variant} />
      ))}
    </Stack>
  ),
  args: {
    palette: 'primary',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {button.variantMap.size.map((size) => (
        <IconButton key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Polymorphic: Story = {
  render: (args) => (
    <IconButton {...args}>
      <a href="https://www.google.com">Google</a>
    </IconButton>
  ),
};

export const WithCSSProp: Story = {
  args: {
    css: {
      bg: 'bg.danger',
    },
  },
};

export const WithSystemProp: Story = {
  render: (args) => <IconButton {...args} bg="bg.danger" />,
};
