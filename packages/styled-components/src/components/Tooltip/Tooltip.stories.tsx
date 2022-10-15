import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '..';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Base: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button>Button</Button>
  </Tooltip>
);

Base.args = {
  label: 'A tooltip',
};
