import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Outline = Base.bind({});

Outline.args = {
  variant: 'outline',
};

export const AsComponent = Base.bind({});

AsComponent.args = {
  as: 'a',
  href: '/',
};

export const WithOverrides = Base.bind({});

WithOverrides.args = {
  sx: {
    root: {
      backgroundColor: '$danger',
    },
  },
};
