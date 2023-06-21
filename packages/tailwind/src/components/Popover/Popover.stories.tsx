import { Button } from '../Button';
import { Popover } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Target>
        <Button>Open</Button>
      </Popover.Target>
      <Popover.Panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          quibusdam quia hic, tempore autem excepturi, blanditiis consequuntur
          asperiores molestiae dolores laborum nihil corporis! Labore
          consequuntur neque, deserunt enim qui et.
        </p>
      </Popover.Panel>
    </Popover>
  ),
};
