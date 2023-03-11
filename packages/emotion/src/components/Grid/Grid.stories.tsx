import { Grid } from './Grid';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Base: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Grid.Col>Column</Grid.Col>
    <Grid.Col>Column</Grid.Col>
    <Grid.Col>Column</Grid.Col>
    <Grid.Col>Column</Grid.Col>
  </Grid>
);

export const Span: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Grid.Col span={4}>Column</Grid.Col>
    <Grid.Col span={8}>Column</Grid.Col>
  </Grid>
);

export const Offset: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Grid.Col span={2} offset={4}>
      Column
    </Grid.Col>
    <Grid.Col offset={2} span={4}>
      Column
    </Grid.Col>
  </Grid>
);
