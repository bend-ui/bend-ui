import { Container } from '../Container';
import { Box } from '../Box';
import { Tiles } from './';
import type { CSS } from '../../styles';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Layout/Tiles',
  component: Tiles,
  decorators: [(story) => <Container>{story()}</Container>],
} as Meta<typeof Tiles>;

const sharedStyles: CSS = {
  width: '100%',
  height: '260px',
  backgroundColor: '$primary',
  borderRadius: '$md',
};

export const Base: StoryObj<typeof Tiles> = {
  render: (args) => (
    <Tiles {...args}>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col>
        <Box sx={sharedStyles} />
      </Tiles.Col>
    </Tiles>
  ),
};

export const Span: StoryObj<typeof Tiles> = {
  render: (args) => (
    <Tiles {...args}>
      <Tiles.Col span={4}>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col span={8}>
        <Box sx={sharedStyles} />
      </Tiles.Col>
    </Tiles>
  ),
};

export const Offset: StoryObj<typeof Tiles> = {
  render: (args) => (
    <Tiles {...args}>
      <Tiles.Col span={2} offset={4}>
        <Box sx={sharedStyles} />
      </Tiles.Col>
      <Tiles.Col offset={2} span={4}>
        <Box sx={sharedStyles} />
      </Tiles.Col>
    </Tiles>
  ),
};
