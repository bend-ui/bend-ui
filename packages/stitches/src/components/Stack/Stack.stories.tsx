import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack } from './';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

export const Default: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi expedita
      doloribus mollitia rerum ullam consequatur esse. Praesentium, dolores?
      Voluptate voluptatem impedit, quisquam nostrum explicabo facilis non
      pariatur! Fugit, amet iusto.
    </p>
  </Stack>
);
