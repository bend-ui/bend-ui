import { Button } from '../Button';
import Tooltip from './Tooltip';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Usage: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  ),

  args: {
    content: 'Tooltip',
  },
};
