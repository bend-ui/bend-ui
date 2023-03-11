import { Avatar } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default { component: Avatar } as ComponentMeta<typeof Avatar>;

type Story = ComponentStory<typeof Avatar>;

export const Base: Story = (args) => <Avatar {...args} />;

Base.args = {
  src: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
};

export const Variants = Base.bind({});
Variants.parameters = {
  variants: {
    enable: true,
  },
};
