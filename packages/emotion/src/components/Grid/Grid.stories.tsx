import { Grid } from './Grid';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
} as Meta<typeof Grid>;

export const Base: StoryObj<typeof Grid> = {
  render: (args) => (
    <Grid {...args}>
      <Grid.Col>Column</Grid.Col>
      <Grid.Col>Column</Grid.Col>
      <Grid.Col>Column</Grid.Col>
      <Grid.Col>Column</Grid.Col>
    </Grid>
  ),
};

export const Span: StoryObj<typeof Grid> = {
  render: (args) => (
    <Grid {...args}>
      <Grid.Col span={4}>Column</Grid.Col>
      <Grid.Col span={8}>Column</Grid.Col>
    </Grid>
  ),
};

export const Offset: StoryObj<typeof Grid> = {
  render: (args) => (
    <Grid {...args}>
      <Grid.Col span={2} offset={4}>
        Column
      </Grid.Col>
      <Grid.Col offset={2} span={4}>
        Column
      </Grid.Col>
    </Grid>
  ),
};
