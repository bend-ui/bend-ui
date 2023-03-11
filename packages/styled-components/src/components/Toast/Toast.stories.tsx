import { FiCheckCircle } from 'react-icons/fi';
import { Toast } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

export const Base: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

Base.args = {
  title: 'Succesfully saved!',
  description: 'The file is now saved',
  icon: <FiCheckCircle />,
};

export const Standalone: ComponentStory<typeof Toast> = (args) => (
  <Toast {...args}>
    <Toast.Title>Succesfully saved!</Toast.Title>
    <Toast.Description>The file is now saved</Toast.Description>
  </Toast>
);
