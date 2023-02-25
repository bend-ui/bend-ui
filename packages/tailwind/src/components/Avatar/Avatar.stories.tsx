import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './';

export default { component: Avatar } as ComponentMeta<typeof Avatar>;

type Story = ComponentStory<typeof Avatar>;

export const Base: Story = (args) => <Avatar {...args} />;

Base.args = {
  src: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
};
