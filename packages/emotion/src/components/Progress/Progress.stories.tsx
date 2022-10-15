import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Progress } from './';

export default {
  title: 'Components/Feedback/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

export const Usage: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

Usage.args = {
  value: 50,
};
