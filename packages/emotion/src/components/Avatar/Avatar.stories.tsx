import { Avatar } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Base: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

Base.args = {
  src: 'https://picsum.photos/200',
};
