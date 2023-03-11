import { Checkbox } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default { component: Checkbox } as ComponentMeta<typeof Checkbox>;

type Story = ComponentStory<typeof Checkbox>;

export const Base: Story = (args) => <Checkbox {...args} />;

Base.args = {
  label: 'The checkbox label',
};
