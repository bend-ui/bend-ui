import React from 'react';
import { TbBrandTelegram } from 'react-icons/tb';
import { Group } from '../Group';

import { Button } from './';
import type { ButtonProps } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Secondary = Base.bind({});

Secondary.args = {
  palette: 'secondary',
};

export const Danger = Base.bind({});

Danger.args = {
  palette: 'danger',
};

export const WithIcon = Base.bind({});

WithIcon.args = {
  icon: <TbBrandTelegram />,
};

export const As = Base.bind({});

As.args = {
  as: 'a',
  href: '/',
};

export const Sizes: ComponentStory<typeof Button> = (args) => {
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
};
