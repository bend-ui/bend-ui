import { Avatar } from '../Avatar';
import { Media } from './';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Layout/Media',
  component: Media,
} as Meta<typeof Media>;

export const Default: StoryObj<typeof Media> = {
  render: (args) => (
    <Media {...args}>
      <Media.Image>
        <Avatar src="https://images.unsplash.com/photo-1634727898501-a76b30bc2c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" />
      </Media.Image>
      <Media.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates
        magni libero itaque? Cum nam dicta ducimus quidem, quis minima libero
        explicabo eaque ullam. Optio distinctio nam maiores. Quod, doloremque!
      </Media.Content>
    </Media>
  ),
};
