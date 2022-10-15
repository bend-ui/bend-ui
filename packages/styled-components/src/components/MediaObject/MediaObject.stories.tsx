import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MediaObject } from './MediaObject';

export default {
  title: 'Layout/MediaObject',
  component: MediaObject,
} as ComponentMeta<typeof MediaObject>;

export const Base: ComponentStory<typeof MediaObject> = (args) => (
  <MediaObject {...args} />
);
