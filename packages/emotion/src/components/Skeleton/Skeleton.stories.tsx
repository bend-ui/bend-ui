import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Base: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);
