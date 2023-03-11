import { FiEdit2 } from 'react-icons/fi';
import { IconButton } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Base: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

Base.args = {
  icon: <FiEdit2 />,
};
