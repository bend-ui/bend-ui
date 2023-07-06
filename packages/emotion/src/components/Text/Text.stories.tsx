import { Text } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Typography/Text',
  component: Text,
} as Meta<typeof Text>;

export const Base: StoryObj<typeof Text> = {
  render: (args) => (
    <Text {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere
      cumque! Voluptatum neque corporis placeat sequi officia provident sapiente
      sit fuga ut tempora itaque natus, iure culpa earum recusandae maxime.
    </Text>
  ),
};
