import { useDisclosure } from '@particles/primitives';
import { Button } from '../Button';
import { Drawer } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Overlay/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Default: ComponentStory<typeof Drawer> = (args) => {
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
};
