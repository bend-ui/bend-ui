import { Container } from '../Container';
import { Tiles } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Layout/Tiles',
  component: Tiles,
  decorators: [(story) => <Container>{story()}</Container>],
} as Meta<typeof Tiles>;

export const Base: StoryObj<typeof Tiles> = {
  render: (args) => (
    <Tiles {...args}>
      <Tiles.Col>Column</Tiles.Col>
      <Tiles.Col>Column</Tiles.Col>
      <Tiles.Col>Column</Tiles.Col>
      <Tiles.Col>Column</Tiles.Col>
      <Tiles.Col>Column</Tiles.Col>
      <Tiles.Col>Column</Tiles.Col>
      <Tiles.Col>Column</Tiles.Col>
      <Tiles.Col>Column</Tiles.Col>
    </Tiles>
  ),
};

export const Span: StoryObj<typeof Tiles> = {
  render: (args) => (
    <Tiles {...args}>
      <Tiles.Col span={4}>Column</Tiles.Col>
      <Tiles.Col span={8}>Column</Tiles.Col>
    </Tiles>
  ),
};

export const Offset: StoryObj<typeof Tiles> = {
  render: (args) => (
    <Tiles {...args}>
      <Tiles.Col span={2} offset={4}>
        Column
      </Tiles.Col>
      <Tiles.Col offset={2} span={4}>
        Column
      </Tiles.Col>
    </Tiles>
  ),
};
