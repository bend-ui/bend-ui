import { Button } from '..';
import { Popover } from './Popover';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta<typeof Popover>;

export const Base: StoryObj<typeof Popover> = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Trigger>
        <Button>Open</Button>
      </Popover.Trigger>
      <Popover.Content>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          deserunt, numquam labore est, atque obcaecati aliquid quia voluptatum
          porro sequi quas maiores neque fuga deleniti repellendus voluptatibus?
          Assumenda, minus necessitatibus?
        </span>
      </Popover.Content>
    </Popover>
  ),
};
