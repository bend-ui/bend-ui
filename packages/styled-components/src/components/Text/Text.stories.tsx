import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Base: ComponentStory<typeof Text> = (args) => <Text {...args} />;
