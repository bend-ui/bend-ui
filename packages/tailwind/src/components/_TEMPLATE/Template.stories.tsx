import { Template } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Template> = {
  component: Template,
};

export default meta;

type Story = StoryObj<typeof Template>;

export const Base: Story = {};
