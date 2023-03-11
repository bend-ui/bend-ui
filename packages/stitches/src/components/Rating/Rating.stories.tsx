import { Rating } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

export const Default: ComponentStory<typeof Rating> = (args) => (
  <Rating {...args} />
);
