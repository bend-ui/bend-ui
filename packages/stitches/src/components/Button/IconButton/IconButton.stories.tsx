import { FiEdit2 } from 'react-icons/fi';
import { IconButton } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
} as Meta<typeof IconButton>;

export const Base: StoryObj<typeof IconButton> = {
  args: {
    icon: <FiEdit2 />,
  },
};
