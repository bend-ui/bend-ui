import { useState } from 'react';
import { Button, ButtonGroup } from '../Button';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Modal } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Overlays/Modal',
  component: Modal,
} as Meta<typeof Modal>;

export const Base: StoryObj<typeof Modal> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Heading variant="title">Give me a hell yeah!</Heading>
          <Text>
            If you smell, what The Rock is cooking! Will never, ever, be the
            same, again! Beat me if you can, survive if I let you.
          </Text>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button palette="primary">Continue</Button>
          </ButtonGroup>
        </Modal>
      </>
    );
  },
};
