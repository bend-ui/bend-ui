import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './';

export default { component: Checkbox } as ComponentMeta<typeof Checkbox>;

type Story = ComponentStory<typeof Checkbox>;

export const Base: Story = (args) => <Checkbox {...args} />;

Base.args = {
  label: 'The checkbox label',
};
