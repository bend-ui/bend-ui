import { TemplateName } from './';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'TemplateName',
  component: TemplateName,
} as Meta<typeof TemplateName>;

type Story = StoryObj<typeof TemplateName>;

export const Base: Story = {
  render: (args) => (
    <TemplateName.Root {...args}>TemplateName</TemplateName.Root>
  ),
};
