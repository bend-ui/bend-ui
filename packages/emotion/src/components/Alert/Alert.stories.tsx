import { Alert } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
} as Meta<typeof Alert>;

export const Usage: StoryObj<typeof Alert> = {
  render: (args) => <Alert {...args}>We’ve just released a new feature</Alert>,
};

export const WithTitle: StoryObj<typeof Alert> = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Allo</Alert.Title>We’ve just released a new feature
    </Alert>
  ),
};
