import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from '../Container';
import { Box } from '../Box';
import { CSS } from '../../styles';
import { Tiles } from './';

export default {
  title: 'Layout/Tiles',
  component: Tiles,
  decorators: [(story) => <Container>{story()}</Container>],
} as ComponentMeta<typeof Tiles>;

const sharedStyles: CSS = {
  width: '100%',
  height: '260px',
  backgroundColor: '$primary',
  borderRadius: '$md',
};

export const Base: ComponentStory<typeof Tiles> = (args) => (
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
);

export const Span: ComponentStory<typeof Tiles> = (args) => (
  <Tiles {...args}>
    <Tiles.Col span={4}>
      <Box sx={sharedStyles} />
    </Tiles.Col>
    <Tiles.Col span={8}>
      <Box sx={sharedStyles} />
    </Tiles.Col>
  </Tiles>
);

export const Offset: ComponentStory<typeof Tiles> = (args) => (
  <Tiles {...args}>
    <Tiles.Col span={2} offset={4}>
      <Box sx={sharedStyles} />
    </Tiles.Col>
    <Tiles.Col offset={2} span={4}>
      <Box sx={sharedStyles} />
    </Tiles.Col>
  </Tiles>
);
