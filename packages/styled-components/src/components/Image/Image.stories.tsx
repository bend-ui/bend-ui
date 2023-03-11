import { Image } from './Image';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Data Display/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

export const Base: ComponentStory<typeof Image> = (args) => <Image {...args} />;
