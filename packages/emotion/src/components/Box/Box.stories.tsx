import { Box } from './';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Layout/Box',
  component: Box,
} as Meta<typeof Box>;

export const Base: StoryObj<typeof Box> = {
  render: (args) => (
    <Box {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae
      pariatur quaerat architecto sit. Earum ratione assumenda id beatae
      delectus asperiores molestias nam cumque, incidunt sint similique quo
      tempore tempora?
    </Box>
  ),

  args: {
    sx: {
      color: '$indigo500',
    },
    marginBottom: '$md',
  },
};
