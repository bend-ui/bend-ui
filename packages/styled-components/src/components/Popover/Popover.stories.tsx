import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '..';
import { Popover } from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Base: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <Popover.Trigger>
      <Button>Open</Button>
    </Popover.Trigger>
    <Popover.Content>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam deserunt,
        numquam labore est, atque obcaecati aliquid quia voluptatum porro sequi
        quas maiores neque fuga deleniti repellendus voluptatibus? Assumenda,
        minus necessitatibus?
      </span>
    </Popover.Content>
  </Popover>
);
