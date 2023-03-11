import { Progress } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
