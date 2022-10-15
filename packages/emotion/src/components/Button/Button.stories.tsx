import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TbBrandTelegram } from 'react-icons/tb';
import { Group } from '../Group';
import { Button, ButtonProps } from './';

export default {
  title: 'Components/Actions/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
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

export const WithIcon = Base.bind({});

WithIcon.args = {
  icon: <TbBrandTelegram />,
};

export const Sizes: ComponentStory<typeof Button> = (args) => {
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
        <Button {...args} size={size} />
      ))}
    </Group>
  );
};
