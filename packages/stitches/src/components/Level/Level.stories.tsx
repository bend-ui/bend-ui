import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Level } from './';

export default {
  title: 'Layout/Level',
  component: Level,
} as ComponentMeta<typeof Level>;

export const Default: ComponentStory<typeof Level> = (args) => (
  <Level {...args}>
    <div>Hello World</div>
    <div>Foo Bar</div>
  </Level>
);
