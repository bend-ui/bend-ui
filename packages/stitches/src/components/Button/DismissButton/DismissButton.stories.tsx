import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DismissButton } from '.';

export default {
  title: 'Components/Button/DismissButton',
  component: DismissButton,
} as ComponentMeta<typeof DismissButton>;

export const Base: ComponentStory<typeof DismissButton> = (args) => (
  <DismissButton {...args}></DismissButton>
);
