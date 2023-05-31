import { Lorem } from '../../../.storybook/components';
import { Modal } from './';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Modal,
  title: 'Components/Modal',
  decorators: [
    (Story) => (
      <>
        <Story />
        <Lorem lines={5} />
      </>
    ),
  ],
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => (
  <Modal {...args}>
    <Modal.Header>
      The header
      <Modal.CloseButton />
    </Modal.Header>
    <Modal.Body>
      <Lorem lines={4} />
    </Modal.Body>
    <Modal.Footer>Footer</Modal.Footer>
  </Modal>
);

export const Base = {
  render: Template,
  args: {},
};
