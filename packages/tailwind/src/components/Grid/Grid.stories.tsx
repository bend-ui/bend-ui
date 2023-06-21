import { Grid } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Grid,
} as Meta<typeof Grid>;

type Story = StoryFn<typeof Grid>;

export const Base: Story = {
  render: (args) => (
    <Grid {...args}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, iusto
        quidem! Aut, sunt. Deserunt hic facilis sed earum atque quidem aliquam
        et, voluptates iste. Repellat quaerat quis facilis molestias dolore?
      </p>
    </Grid>
  ),
};
