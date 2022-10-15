import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Default: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args} />
);
