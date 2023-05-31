import { Toast } from '.';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Feedback/Toast',
  component: Toast,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit harum fugit impedit voluptatem, tenetur voluptatum similique deserunt iusto vel quisquam quo minus amet assumenda aliquam accusantium corporis recusandae, minima velit!',
  },
} as Meta<typeof Toast>;

export const Base: StoryObj<typeof Toast> = {};
