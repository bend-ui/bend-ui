import { FiCheckCircle } from 'react-icons/fi';
import { Toast } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Data Display/Toast',
  component: Toast,
} as Meta<typeof Toast>;

export const Base: StoryObj<typeof Toast> = {
  args: {
    title: 'Succesfully saved!',
    description: 'The file is now saved',
    icon: <FiCheckCircle />,
  },
};

export const Standalone: StoryObj<typeof Toast> = {
  render: (args) => (
    <Toast {...args}>
      <Toast.Title>Succesfully saved!</Toast.Title>
      <Toast.Description>The file is now saved</Toast.Description>
    </Toast>
  ),
};
