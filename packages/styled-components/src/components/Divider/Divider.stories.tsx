import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: 'Data Display/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Base: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);
