import { ArrowRightIcon, CloudDownloadIcon } from 'lucide-react';
import { button } from '@particles/styled-system/recipes';
import { Button } from './';
import { Stack } from '../Stack';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Button> = {
  title: 'Components/Controls/Button',
  component: Button,
  tags: ['alpha'],
  args: {
    children: 'Button',
  },
  argTypes: {
    children: {
      description: 'The button content',
      control: 'text',
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

/** The variants of the button */
export const Variants: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {button.variantMap.variant.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant} button
        </Button>
      ))}
    </Stack>
  ),
};

/** The sizes of the button */
export const Sizes: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {button.variantMap.size.map((size) => (
        <Button key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

/** The button with an icon */
export const WithIcon: Story = {
  args: {
    icon: <CloudDownloadIcon />,
  },
};

export const WithIconEnd: Story = {
  args: {
    iconEnd: <ArrowRightIcon />,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    isFull: true,
  },
};

export const Polymorphic: Story = {
  render: (args) => (
    <Button {...args}>
      <a href="https://www.google.com">Google</a>
    </Button>
  ),
};

export const WithCSSProp: Story = {
  args: {
    css: {
      bg: 'fill.error',
    },
  },
};

export const WithSystemProp: Story = {
  render: (args) => <Button {...args} bg="fill.error" />,
};
