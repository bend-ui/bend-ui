import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FiEdit2 } from 'react-icons/fi';
import { IconButton } from '.';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Base: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}></IconButton>
);

Base.args = {
  icon: <FiEdit2 />,
};
