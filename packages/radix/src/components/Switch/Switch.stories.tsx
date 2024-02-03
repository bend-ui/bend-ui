import { Switch } from './Switch';
import type { Story } from '@storybook/addon-docs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Base: Story = {};
