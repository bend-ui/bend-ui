import { Button } from '../Button';
import { Tooltip } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Default: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Button</Button>
    </Tooltip>
  ),

  args: {
    label: "I'm a tooltip",
  },
};
