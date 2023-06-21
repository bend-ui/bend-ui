import { useRef } from 'react';
import { Popover } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Overlays/Popover',
  component: Popover,
} as Meta<typeof Popover>;

type Story = StoryFn<typeof Popover>;

export const Base: Story = {
  render: (args) => (
    <Popover.Root {...args}>
      <Popover.Trigger>
        <button>Open</button>
      </Popover.Trigger>
      <Popover.Panel>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti error
        dicta accusantium, numquam eligendi sit labore magni suscipit ipsum at,
        voluptatum enim similique vel dolor voluptatibus atque! Assumenda,
        minima officiis!
      </Popover.Panel>
    </Popover.Root>
  ),
};

export const WithDefaultInitialFocus: StoryObj<typeof Popover> = {
  render: (args) => (
    <Popover.Root {...args}>
      <Popover.Trigger>
        <button>Open</button>
      </Popover.Trigger>
      <Popover.Panel>
        <input type="text" />
        <button>Continue</button>
      </Popover.Panel>
    </Popover.Root>
  ),
};

export const WithInitialFocus: StoryObj<typeof Popover> = {
  render: (args) => {
    const inputRef = useRef<HTMLInputElement>();
    const buttonRef = useRef<HTMLButtonElement>();
    return (
      <Popover.Root {...args} initialFocusRef={buttonRef}>
        <Popover.Trigger>
          <button>Open</button>
        </Popover.Trigger>
        <Popover.Panel>
          <input ref={inputRef} type="text" />
          <button ref={buttonRef}>Continue</button>
        </Popover.Panel>
      </Popover.Root>
    );
  },
};
