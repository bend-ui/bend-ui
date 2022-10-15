import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Group } from './Group';

export default {
  title: 'Layout/Group',
  component: Group,
} as ComponentMeta<typeof Group>;

export const Base: ComponentStory<typeof Group> = (args) => (
  <Group {...args}>
    <Box>Item</Box>
    <Box>Item</Box>
    <Box>Item</Box>
  </Group>
);

export const WithButton: ComponentStory<typeof Group> = (args) => (
  <Group {...args}>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Group>
);
