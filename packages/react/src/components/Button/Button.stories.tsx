import { Stack } from '@particles/styled-system/jsx';
import { TbArrowRight, TbCloudDownload } from 'react-icons/tb';
import { button } from '@particles/styled-system/recipes';
import { Button } from './';

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
      defaultValue: 'solid',
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
    <Stack align="flex-start">
      {button.variantMap.palette.map((palette) => (
        <Button key={palette} {...args} palette={palette} />
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Stack align="flex-start">
      {button.variantMap.variant.map((variant) => (
        <Button key={variant} {...args} variant={variant} />
      ))}
    </Stack>
  ),
  args: {
    palette: 'primary',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack align="flex-start">
      {button.variantMap.size.map((size) => (
        <Button key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: <TbCloudDownload />,
  },
};

export const WithIconEnd: Story = {
  args: {
    iconEnd: <TbArrowRight />,
  },
};

export const IconButton: Story = {
  args: {
    children: null,
    icon: <TbCloudDownload />,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
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
      bg: 'bg.danger',
    },
  },
};

export const WithSystemProp: Story = {
  render: (args) => <Button {...args} bg="bg.danger" />,
};
