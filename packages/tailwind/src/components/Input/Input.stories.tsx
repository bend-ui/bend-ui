import { TbWorld } from 'react-icons/tb';
import { Button } from '../Button';
import { Input } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default { component: Input } as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {
    size: 'sm',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <TbWorld />,
  },
};

export const WithSectionEnd: Story = {
  args: {
    sectionEnd: <Button size="sm">Copy</Button>,
  },
};

export const WithAddons: Story = {
  args: {
    addonStart: 'http://',
    addonEnd: '.com',
  },
};

export const Variants = {
  parameters: {
    variants: {
      enable: true,
    },
  },
};

export const WithFormControl: Story = {
  render: (args) => <Input {...args} />,
};
