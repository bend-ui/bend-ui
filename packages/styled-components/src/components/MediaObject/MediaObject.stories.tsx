import { MediaObject } from './MediaObject';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Layout/MediaObject',
  component: MediaObject,
} as ComponentMeta<typeof MediaObject>;

export const Base: ComponentStory<typeof MediaObject> = (args) => (
  <MediaObject {...args} />
);
