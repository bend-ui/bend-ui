import { Button } from '../Button';
import { Popover } from '.';
import type { ComponentMeta } from '@storybook/react';
export default {
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default = () => (
  <Popover>
    <Popover.Trigger>
      <Button>Open</Button>
    </Popover.Trigger>
    <Popover.Panel>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti error
      dicta accusantium, numquam eligendi sit labore magni suscipit ipsum at,
      voluptatum enim similique vel dolor voluptatibus atque! Assumenda, minima
      officiis!
    </Popover.Panel>
  </Popover>
);
