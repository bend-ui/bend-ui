import { Lorem } from '../../../.storybook/components';
import { Modal } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
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

export const Base = Template.bind({});
Base.args = {};
