import { Tiles, useTiles } from './';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Tiles',
  component: Tiles,
} as ComponentMeta<typeof Tiles>;

type Story = ComponentStory<typeof Tiles>;

export const Base: Story = (args) => <Tiles.Root {...args} />;

export const Hook = () => {
  const { getTilesStyles } = useTiles({ cols: 3 });
  return (
    <div style={{ ...getTilesStyles, gap: '16px' }}>
      {[...Array(5).fill(true)].map((tile) => (
        <div
          key={`tile-${tile}`}
          style={{ backgroundColor: 'rgba(255,0,255,0.1)', padding: '1em' }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          reprehenderit provident fugit, quaerat sequi vitae vero tempore nam
          quis iste dolore voluptatibus molestiae? Corporis sunt tenetur
          explicabo quibusdam. Est, neque!
        </div>
      ))}
    </div>
  );
};
