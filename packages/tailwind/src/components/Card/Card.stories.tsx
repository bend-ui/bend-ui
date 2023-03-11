import { Card } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Card,
} as ComponentMeta<typeof Card>;

type Story = ComponentStory<typeof Card>;

export const Base: Story = (args) => (
  <Card {...args}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, iusto
      quidem! Aut, sunt. Deserunt hic facilis sed earum atque quidem aliquam et,
      voluptates iste. Repellat quaerat quis facilis molestias dolore?
    </p>
  </Card>
);
