import { badge } from '@particles/styled-system/recipes';
import { Indicator } from '../Indicator';
import { Badge } from './Badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data/Badge',
  component: Badge,
  argTypes: {
    palette: {
      control: 'select',
      options: badge.variantMap.palette,
    },
  },
  args: { children: 'Badge' },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Base: Story = {};

export const Danger: Story = {
  args: {
    palette: 'danger',
  },
};

export const WithIndicator: Story = {
  args: {
    children: (
      <>
        <Indicator />
        Badge
      </>
    ),
  },
};
