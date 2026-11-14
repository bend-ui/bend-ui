import { Meta, StoryObj } from '@storybook/react-vite';
import { button } from '@bend-ui/styled-system/recipes';
import { Stack } from '@bend-ui/styled-system/jsx';
import { Button } from './Button';
import { IconButton } from '../IconButton';

const meta: Meta<typeof Button> = {
  title: 'Components/Form/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: button.variantMap.variant,
      description:
        'Hierarchy (primary/secondary/tertiary) or danger/inverse treatment',
      defaultValue: 'secondary',
    },
    size: {
      control: 'select',
      options: button.variantMap.size,
      description: 'The button size',
      defaultValue: 'md',
    },
  },
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {button.variantMap.variant.map((variant) => (
        <Button key={variant} {...args} variant={variant} />
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Stack align="center" gap="md">
      {button.variantMap.size.map((size) => (
        <Button key={size} {...args} size={size} />
      ))}
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const IconOnly: Story = {
  render: (args) => (
    <IconButton {...args} icon={<span aria-hidden="true">+</span>}>
      Add item
    </IconButton>
  ),
};

export const Busy: Story = {
  args: { children: 'Saving', isLoading: true, disabled: true },
};
