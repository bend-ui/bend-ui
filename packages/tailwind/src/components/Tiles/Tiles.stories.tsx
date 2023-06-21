import { Tiles } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Tiles,
} as Meta<typeof Tiles>;

type Story = StoryFn<typeof Tiles>;

export const Base: Story = {
  render: (args) => (
    <Tiles {...args}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, iusto
        quidem! Aut, sunt. Deserunt hic facilis sed earum atque quidem aliquam
        et, voluptates iste. Repellat quaerat quis facilis molestias dolore?
      </p>
    </Tiles>
  ),
};
