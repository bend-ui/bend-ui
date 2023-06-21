import React from 'react';
import { Level, levelStyles } from '.';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Level',
  component: Level,
} as Meta<typeof Level>;

export const Base: StoryObj<typeof Level> = {
  render: (args) => (
    <Level style={levelStyles} {...args}>
      <div style={{ backgroundColor: 'rgba(255,0,255,0.1)', padding: '1em' }}>
        Content
      </div>
      <div style={{ backgroundColor: 'rgba(255,0,255,0.1)', padding: '1em' }}>
        Content
      </div>
    </Level>
  ),
};
