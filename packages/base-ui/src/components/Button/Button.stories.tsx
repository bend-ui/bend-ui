import { Meta, StoryObj } from '@storybook/react-vite';
import { button } from '@bend-ui/styled-system/recipes';
import { Stack } from '../';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Form/Button',
  component: Button,
  argTypes: {
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
