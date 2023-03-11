import { Button } from '../Button';
import { Popover } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <Popover.Button>Open</Popover.Button>
    <Popover.Panel>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum
      sed, facilis officiis asperiores dignissimos impedit quibusdam, suscipit,
      quis enim id distinctio praesentium quod laudantium molestiae culpa
      dolorum dolorem unde.
    </Popover.Panel>
  </Popover>
);

export const RenderFn: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <Popover.Button>Open</Popover.Button>
    <Popover.Panel>
      {({ onClose, isOpen }) => (
        <>
          <Button onClick={onClose}>onClose fn</Button>
          <Button onClick={isOpen}>isOpen fn</Button>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          cum sed, facilis officiis asperiores dignissimos impedit quibusdam,
          suscipit, quis enim id distinctio praesentium quod laudantium
          molestiae culpa dolorum dolorem unde.
        </>
      )}
    </Popover.Panel>
  </Popover>
);
