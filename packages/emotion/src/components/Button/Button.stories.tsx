import { TbBrandTelegram } from 'react-icons/tb';
import { Group } from '../Group';
import { Button } from './';
import type { ButtonProps } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Actions/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<typeof Button>;

export const Base: StoryObj<typeof Button> = {};

export const Outline = {
  args: {
    variant: 'outline',
  },
};

export const Danger = {
  args: {
    palette: 'danger',
  },
};

export const Link = {
  args: {
    as: 'a',
    href: '/',
  },
};

export const WithIcon = {
  args: {
    icon: <TbBrandTelegram />,
  },
};

export const Sizes: StoryObj<typeof Button> = {
  render: (args) => {
    const buttonSizes: Array<ButtonProps['size']> = [
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
    ];
    return (
      <Group>
        {buttonSizes.map((size) => (
          <Button key={size} {...args} size={size} />
        ))}
      </Group>
    );
  },
};
