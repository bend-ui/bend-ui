import { Text } from './Text';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Base: ComponentStory<typeof Text> = (args) => <Text {...args} />;
