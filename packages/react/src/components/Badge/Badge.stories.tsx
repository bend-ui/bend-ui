import { badge } from '@bend-ui/styled-system/recipes';
import { Indicator } from '../Indicator';
import { Badge } from './Badge';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Data/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: badge.variantMap.variant,
    },
    palette: {
      control: 'select',
      options: badge.variantMap.palette,
    },
  },
  args: { children: 'Badge' },
} satisfies Meta<typeof Badge>;

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
