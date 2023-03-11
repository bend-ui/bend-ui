import { Divider } from './Divider';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Base: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);
