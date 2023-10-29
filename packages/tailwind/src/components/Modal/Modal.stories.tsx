import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from './';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryFn<typeof Modal>;

export const Base: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(!open)}>Button</Button>
        <Modal {...args} isOpen={open}>
          <label htmlFor="email">Email</label>
          <Input id="" name="email" type="text" />
          <label htmlFor="password">Password</label>
          <Input id="" name="password" type="password" />
          <Button>Continue</Button>
        </Modal>
      </>
    );
  },
};
