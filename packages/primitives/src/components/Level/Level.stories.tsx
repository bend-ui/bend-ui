import React from 'react';
import { Level, levelStyles } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/Level',
  component: Level,
} as ComponentMeta<typeof Level>;

export const Base: ComponentStory<typeof Level> = (args) => (
  <Level style={levelStyles} {...args}>
    <div style={{ backgroundColor: 'rgba(255,0,255,0.1)', padding: '1em' }}>
      Content
    </div>
    <div style={{ backgroundColor: 'rgba(255,0,255,0.1)', padding: '1em' }}>
      Content
    </div>
  </Level>
);
