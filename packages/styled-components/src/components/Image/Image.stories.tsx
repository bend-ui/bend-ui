import { Image } from './Image';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Data Display/Image',
  component: Image,
} as Meta<typeof Image>;

export const Base: StoryObj<typeof Image> = {};
