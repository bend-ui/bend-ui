import React from 'react';
import { Button } from '..';
import { Tooltip } from './Tooltip';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Base: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Button</Button>
    </Tooltip>
  ),

  args: {
    label: 'A tooltip',
  },
};
