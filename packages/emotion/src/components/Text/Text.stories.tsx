import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Components/Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Base: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere cumque!
    Voluptatum neque corporis placeat sequi officia provident sapiente sit fuga
    ut tempora itaque natus, iure culpa earum recusandae maxime.
  </Text>
);
