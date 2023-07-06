import { Level } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Level',
  component: Level,
} as Meta<typeof Level>;

export const Default: StoryObj<typeof Level> = {
  render: (args) => (
    <Level {...args}>
      <div>Hello World</div>
      <div>Foo Bar</div>
    </Level>
  ),
};
