import React, { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './';

export default {
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <Popover.Trigger>
      <button>Open</button>
    </Popover.Trigger>
    <Popover.Panel>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti error
      dicta accusantium, numquam eligendi sit labore magni suscipit ipsum at,
      voluptatum enim similique vel dolor voluptatibus atque! Assumenda, minima
      officiis!
    </Popover.Panel>
  </Popover>
);

export const WithDefaultInitialFocus: ComponentStory<typeof Popover> = (
  args
) => {
  return (
    <Popover {...args}>
      <Popover.Trigger>
        <button>Open</button>
      </Popover.Trigger>
      <Popover.Panel>
        <input type="text" />
        <button>Continue</button>
      </Popover.Panel>
    </Popover>
  );
};

export const WithInitialFocus: ComponentStory<typeof Popover> = (args) => {
  const inputRef = useRef<HTMLInputElement>();
  const buttonRef = useRef<HTMLButtonElement>();
  return (
    <Popover {...args} initialFocusRef={buttonRef}>
      <Popover.Trigger>
        <button>Open</button>
      </Popover.Trigger>
      <Popover.Panel>
        <input ref={inputRef} type="text" />
        <button ref={buttonRef}>Continue</button>
      </Popover.Panel>
    </Popover>
  );
};
