import { DismissButton } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button/DismissButton',
  component: DismissButton,
} as ComponentMeta<typeof DismissButton>;

export const Base: ComponentStory<typeof DismissButton> = (args) => (
  <DismissButton {...args} />
);
