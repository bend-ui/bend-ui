import { Skeleton } from './Skeleton';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Base: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);
