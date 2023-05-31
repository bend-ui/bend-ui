import { Stack } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as Meta<typeof Stack>;

export const Default: StoryObj<typeof Stack> = {
  render: (args) => (
    <Stack {...args}>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        expedita doloribus mollitia rerum ullam consequatur esse. Praesentium,
        dolores? Voluptate voluptatem impedit, quisquam nostrum explicabo
        facilis non pariatur! Fugit, amet iusto.
      </p>
    </Stack>
  ),
};
