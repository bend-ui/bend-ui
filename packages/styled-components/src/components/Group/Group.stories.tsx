import { Box } from '../Box';
import { Button } from '../Button';
import { Group } from './Group';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Layout/Group',
  component: Group,
} as Meta<typeof Group>;

export const Base: StoryObj<typeof Group> = {
  render: (args) => (
    <Group {...args}>
      <Box>Item</Box>
      <Box>Item</Box>
      <Box>Item</Box>
    </Group>
  ),
};

export const WithButton: StoryObj<typeof Group> = {
  render: (args) => (
    <Group {...args}>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Group>
  ),
};
