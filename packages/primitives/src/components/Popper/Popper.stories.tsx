import React, { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popper } from './';

export default {
  component: Popper,
} as ComponentMeta<typeof Popper>;

export const Default: ComponentStory<typeof Popper> = () => {
  const anchor = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <button ref={anchor} onClick={() => setOpen(true)}>
        Continue
      </button>
      <Popper anchorRef={anchor} isOpen={open} onClose={() => setOpen(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente
        voluptate deleniti obcaecati qui laboriosam totam dolorum autem
        pariatur, perspiciatis eius officia hic libero cupiditate debitis
        mollitia quas soluta accusantium.
      </Popper>
    </>
  );
};
