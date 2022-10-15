import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from './';

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);
