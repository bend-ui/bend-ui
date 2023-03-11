import { Breadcrumb } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

export const Base: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);
