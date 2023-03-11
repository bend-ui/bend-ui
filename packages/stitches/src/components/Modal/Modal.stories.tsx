import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Overlay/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        accusamus nihil in illum excepturi porro esse laboriosam impedit nisi
        vero. Praesentium quam culpa quos iusto repellat tenetur a voluptate
        autem.
        <Input placeholder="My Input" />
      </Modal>
    </>
  );
};

export const WithHeader: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Modal Header</Modal.Header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        accusamus nihil in illum excepturi porro esse laboriosam impedit nisi
        vero. Praesentium quam culpa quos iusto repellat tenetur a voluptate
        autem.
        <Input placeholder="My Input" />
      </Modal>
    </>
  );
};
