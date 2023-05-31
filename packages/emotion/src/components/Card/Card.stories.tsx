import { Text } from '../Text';
import { Card } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Data Display/Card',
  component: Card,
} as Meta<typeof Card>;

export const Base: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args}>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
        ullam? Cupiditate obcaecati facere explicabo provident recusandae
        debitis id libero itaque sit? Praesentium eius corrupti ducimus quis
        ipsum libero vitae adipisci.
      </Text>
    </Card>
  ),

  args: {
    sx: {
      color: '$blue500',
    },
  },
};
