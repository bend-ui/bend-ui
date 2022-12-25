import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Combobox } from '.';

export default {
  title: 'Components/Forms/Combobox',
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

export const Default: ComponentStory<typeof Combobox> = (args) => (
  <Combobox {...args} />
);
