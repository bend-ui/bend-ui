import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast } from '.';

export default {
  title: 'Components/Feedback/Toast',
  component: Toast,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit harum fugit impedit voluptatem, tenetur voluptatum similique deserunt iusto vel quisquam quo minus amet assumenda aliquam accusantium corporis recusandae, minima velit!',
  },
} as ComponentMeta<typeof Toast>;

export const Base: ComponentStory<typeof Toast> = (args) => (
  <Toast {...args}></Toast>
);
