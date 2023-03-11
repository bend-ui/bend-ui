import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from './';
import type { ComponentStory, Meta } from '@storybook/react';

export default {
  component: Modal,
} as Meta<typeof Modal>;

type Story = ComponentStory<typeof Modal>;

export const Base: Story = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Button</Button>
      <Modal {...args} isOpen={open}>
        <label htmlFor="email">Email</label>
        <Input type="text" name="email" id="" />
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" id="" />
        <Button>Continue</Button>
      </Modal>
    </>
  );
};
