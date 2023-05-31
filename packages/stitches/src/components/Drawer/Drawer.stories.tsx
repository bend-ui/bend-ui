import { useDisclosure } from '@particles/primitives';
import { Button } from '../Button';
import { Drawer } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Overlay/Drawer',
  component: Drawer,
} as Meta<typeof Drawer>;

export const Default: StoryObj<typeof Drawer> = {
  render: (args) => {
    const { isOpen, toggle } = useDisclosure();
    return (
      <>
        <Button onClick={toggle}>Open</Button>
        <Drawer {...args} isOpen={isOpen} onClose={toggle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          sequi commodi architecto reprehenderit! Rem qui asperiores nam quos
          magnam culpa adipisci, non magni inventore quidem impedit id, itaque
          temporibus consectetur!
        </Drawer>
      </>
    );
  },
};
