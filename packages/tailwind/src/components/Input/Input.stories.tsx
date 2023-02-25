import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TbWorld } from 'react-icons/tb';
import { Input } from './';

export default { component: Input } as ComponentMeta<typeof Input>;

type Story = ComponentStory<typeof Input>;

export const Base: Story = (args) => <Input {...args} />;

export const WithIcon: Story = (args) => <Input {...args} />;
WithIcon.args = {
  icon: <TbWorld />,
};
