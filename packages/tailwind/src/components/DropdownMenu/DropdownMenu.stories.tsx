import { DropdownMenu } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default { component: DropdownMenu } as ComponentMeta<
  typeof DropdownMenu
>;

type Story = ComponentStory<typeof DropdownMenu>;

export const Base: Story = (args) => <DropdownMenu {...args} />;
