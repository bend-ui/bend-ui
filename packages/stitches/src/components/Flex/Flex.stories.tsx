import { Flex } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Default: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args} />
);
