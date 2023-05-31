import { Button } from '../Button';
import { Popover } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta<typeof Popover>;

export const Default: StoryObj<typeof Popover> = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Button>Open</Popover.Button>
      <Popover.Panel>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        cum sed, facilis officiis asperiores dignissimos impedit quibusdam,
        suscipit, quis enim id distinctio praesentium quod laudantium molestiae
        culpa dolorum dolorem unde.
      </Popover.Panel>
    </Popover>
  ),
};

export const RenderFn: StoryObj<typeof Popover> = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Button>Open</Popover.Button>
      <Popover.Panel>
        {({ onClose, isOpen }) => (
          <>
            <Button onClick={onClose}>onClose fn</Button>
            <Button onClick={isOpen}>isOpen fn</Button>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis cum sed, facilis officiis asperiores dignissimos impedit
            quibusdam, suscipit, quis enim id distinctio praesentium quod
            laudantium molestiae culpa dolorum dolorem unde.
          </>
        )}
      </Popover.Panel>
    </Popover>
  ),
};
