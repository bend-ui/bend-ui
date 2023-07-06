import { Group } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Group',
  component: Group,
} as Meta<typeof Group>;

export const Default: StoryObj<typeof Group> = {
  render: (args) => (
    <Group {...args}>
      <div>Hello World</div>
      <div>Foo Bar</div>
    </Group>
  ),
};
