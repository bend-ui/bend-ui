import { Skeleton } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Default: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);
