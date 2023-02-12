import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TemplateName } from './';

export default {
  title: 'TemplateName',
  component: TemplateName,
} as ComponentMeta<typeof TemplateName>;

type Story = ComponentStory<typeof TemplateName>;

export const Base: Story = (args) => (
  <TemplateName.Root {...args}>TemplateName</TemplateName.Root>
);
