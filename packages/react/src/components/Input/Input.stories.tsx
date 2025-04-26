import { ArrowRightCircleIcon, CheckIcon, UserIcon } from 'lucide-react';
import { Button, Box } from '../';
import { Input, SearchInput, PasswordInput } from './';
import type { Meta, StoryObj } from '@storybook/react';
import { input } from '@particles/styled-system/recipes';

const meta: Meta<typeof Input> = {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: input.variantMap.size,
    },
    variant: {
      control: {
        type: 'select',
      },
      options: input.variantMap.variant,
    },
  },
  args: {
    placeholder: 'Enter your email',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const WithIcon: Story = {
  args: { icon: <UserIcon /> },
};

export const WithIconEnd: Story = {
  args: { iconEnd: <CheckIcon /> },
};

/** By default the addons don't have spacing, you'll have to add it yourself. */
export const WithAddonStart: Story = {
  args: {
    addonStart: <Box color="text.secondary">https://</Box>,
  },
};

export const WithAddonEnd: Story = {
  args: {
    addonEnd: (
      <Button size="sm" marginX="-2">
        Search
      </Button>
    ),
  },
};

export const WithAddons: Story = {
  args: {
    addonStart: <Box color="text.secondary">https://</Box>,
    addonEnd: <Button size="sm">Go</Button>,
  },
};

export const WithElementStart: Story = {
  args: {
    elementStart: <Box color="text.secondary">https://</Box>,
  },
};

export const WithElementEnd: Story = {
  args: {
    elementEnd: (
      <Button size="sm" marginInline="-2">
        Search
      </Button>
    ),
  },
};

export const WithIconAndAddon: Story = {
  args: {
    icon: <ArrowRightCircleIcon />,
    iconEnd: <CheckIcon />,
    addonStart: <Box color="text.secondary">https://</Box>,
    addonEnd: <Button size="sm">Go</Button>,
  },
};

export const WithIconAndElement: Story = {
  args: {
    icon: <ArrowRightCircleIcon />,
    elementStart: <Box color="text.secondary">https://</Box>,
  },
};

export const WithIconAndElementEnd: Story = {
  args: {
    icon: <ArrowRightCircleIcon />,
    elementEnd: <Box color="text.secondary">https://</Box>,
  },
};

export const WithIconAndAddonAndElement: Story = {
  args: {
    icon: <ArrowRightCircleIcon />,
    iconEnd: <CheckIcon />,
    addonStart: <Box color="text.secondary">https://</Box>,
    addonEnd: <Button size="sm">Go</Button>,
    elementStart: <Box color="text.secondary">https://</Box>,
  },
};

export const Password: Story = {
  render: () => <PasswordInput />,
};

export const Search: Story = {
  render: () => <SearchInput />,
};
