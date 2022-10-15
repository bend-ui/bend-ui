import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Default: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);
