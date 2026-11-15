import { AngleSlider } from './AngleSlider';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'AngleSlider',
  component: AngleSlider,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AngleSlider>;

export default meta;

type Story = StoryObj<typeof AngleSlider>;

const markers = [0, 45, 90, 135, 180, 225, 270, 315];

export const Base: Story = {
  render: (args) => (
    <AngleSlider {...args}>
      <AngleSlider.Label>Wind direction</AngleSlider.Label>
      <AngleSlider.Control>
        <AngleSlider.Thumb />
        <AngleSlider.MarkerGroup>
          {markers.map((value) => (
            <AngleSlider.Marker key={value} value={value} />
          ))}
        </AngleSlider.MarkerGroup>
      </AngleSlider.Control>
      <AngleSlider.ValueText />
      <AngleSlider.HiddenInput />
    </AngleSlider>
  ),
};
