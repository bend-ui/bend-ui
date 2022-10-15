import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Group } from '.';

export default {
  title: 'Layout/Group',
  component: Group,
} as ComponentMeta<typeof Group>;

export const Default: ComponentStory<typeof Group> = (args) => (
  <Group {...args}>
    <div>Hello World</div>
    <div>Foo Bar</div>
  </Group>
);
