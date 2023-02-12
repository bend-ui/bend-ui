import { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './';

export default {
  title: 'Overlays/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

type Story = ComponentStory<typeof Popover>;

export const Base: Story = (args) => (
  <Popover.Root {...args}>
    <Popover.Trigger>
      <button>Open</button>
    </Popover.Trigger>
    <Popover.Panel>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti error
      dicta accusantium, numquam eligendi sit labore magni suscipit ipsum at,
      voluptatum enim similique vel dolor voluptatibus atque! Assumenda, minima
      officiis!
    </Popover.Panel>
  </Popover.Root>
);

export const WithDefaultInitialFocus: ComponentStory<typeof Popover> = (
  args
) => {
  return (
    <Popover.Root {...args}>
      <Popover.Trigger>
        <button>Open</button>
      </Popover.Trigger>
      <Popover.Panel>
        <input type="text" />
        <button>Continue</button>
      </Popover.Panel>
    </Popover.Root>
  );
};

export const WithInitialFocus: ComponentStory<typeof Popover> = (args) => {
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
};
