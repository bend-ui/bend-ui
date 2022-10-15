import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TbBell } from 'react-icons/tb';
import { IconButton } from './';

export default {
  title: 'Components/Actions/IconButton',
  component: IconButton,
  args: {
    icon: <TbBell />,
  },
} as ComponentMeta<typeof IconButton>;

export const Base: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Outline = Base.bind({});

Outline.args = {
  variant: 'outline',
};

export const Danger = Base.bind({});

Danger.args = {
  palette: 'danger',
};

export const Link = Base.bind({});

Link.args = {
  as: 'a',
  href: '/',
};
