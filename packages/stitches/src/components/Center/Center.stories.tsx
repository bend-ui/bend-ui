import { Box } from '../Box';
import { Text } from '../Text';
import { Center } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Center',
  component: Center,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Center>;

export const Base: ComponentStory<typeof Center> = () => (
  <Center>
    <Box sx={{ backgroundColor: '$surface', p: '$lg' }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at,
        non aperiam, neque reprehenderit omnis numquam hic accusamus quisquam
        soluta dolore officiis laudantium, ipsum sequi quaerat inventore ut
        provident perferendis.
      </Text>
    </Box>
  </Center>
);
