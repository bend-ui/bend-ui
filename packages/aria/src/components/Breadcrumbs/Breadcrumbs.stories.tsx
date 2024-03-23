import { Breadcrumbs } from './Breadcrumbs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Base: Story = {
  args: {},
};
