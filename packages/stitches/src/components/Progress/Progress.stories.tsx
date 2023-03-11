import { Progress } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

export const Default: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);
