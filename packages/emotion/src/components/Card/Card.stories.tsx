import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../Text';
import { Card } from '.';

export default {
  title: 'Components/Data Display/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Base: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Text>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
      ullam? Cupiditate obcaecati facere explicabo provident recusandae debitis
      id libero itaque sit? Praesentium eius corrupti ducimus quis ipsum libero
      vitae adipisci.
    </Text>
  </Card>
);

Base.args = {
  sx: {
    color: '$blue500',
  },
};
