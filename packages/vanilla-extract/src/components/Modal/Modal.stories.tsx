import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useDisclosure } from '@particles/primitives';
import { Button } from '../Button';
import Modal from './Modal';

export default {
  title: 'Overlay/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Base: ComponentStory<typeof Modal> = (args) => {
  const { isOpen } = useDisclosure();
  return (
    <>
      <Button>Open modal</Button>
      <Modal {...args} isOpen={isOpen}></Modal>
    </>
  );
};
