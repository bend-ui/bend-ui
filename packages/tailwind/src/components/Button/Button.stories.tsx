import { TbRefresh } from 'react-icons/tb';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <TbRefresh />,
  },
};

export const WithIconEnd: Story = {
  args: {
    iconEnd: <TbRefresh />,
  },
};

export const IconOnly: Story = {
  args: {
    icon: <TbRefresh />,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    loadingLabel: 'Processing...',
  },
};

export const AsLink: Story = {
  args: {
    as: 'a',
    href: '/',
  },
};

export const WithClassName: Story = {
  args: {
    className: 'bg-yellow-500 hover:bg-yellow-700',
  },
};

export const WithClassNames: Story = {
  args: {
    classNames: {
      root: 'bg-yellow-500 hover:bg-yellow-700',
    },
  },
};

export const Variants = {
  parameters: {
    variants: {
      enable: true,
    },
  },
};
