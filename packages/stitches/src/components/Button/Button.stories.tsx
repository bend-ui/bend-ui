import React from 'react';
import { TbBrandTelegram } from 'react-icons/tb';
import { Group } from '../Group';

import { Button } from './';
import type { ButtonProps } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

export const Base: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>Button</Button>,
};

export const Secondary = {
  render: Base,

  args: {
    palette: 'secondary',
  },
};

export const Danger = {
  render: Base,

  args: {
    palette: 'danger',
  },
};

export const WithIcon = {
  render: Base,

  args: {
    icon: <TbBrandTelegram />,
  },
};

export const As = {
  render: Base,

  args: {
    as: 'a',
    href: '/',
  },
};

export const Sizes: StoryObj<typeof Button> = {
  render: (args) => {
    const buttonSizes: Array<ButtonProps['size']> = ['sm', 'md', 'lg'];
    return (
      <Group>
        {buttonSizes.map((size) => (
          <Button key={size} {...args} size={size}>
            Button {size}
          </Button>
        ))}
      </Group>
    );
  },
};
