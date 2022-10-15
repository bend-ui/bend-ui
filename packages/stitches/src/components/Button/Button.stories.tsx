import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FiCircle } from 'react-icons/fi';
import { Button } from './';

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
  icon: <FiCircle />,
};

export const As = Base.bind({});

As.args = {
  as: 'a',
  href: '/',
};
