import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '.';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Usage: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>We’ve just released a new feature</Alert>
);

export const WithTitle: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>
    <Alert.Title>Allo</Alert.Title>We’ve just released a new feature
  </Alert>
);
