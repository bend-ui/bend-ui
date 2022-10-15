import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './';

export default {
  title: 'Components/Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Base: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae
    pariatur quaerat architecto sit. Earum ratione assumenda id beatae delectus
    asperiores molestias nam cumque, incidunt sint similique quo tempore
    tempora?
  </Box>
);

Base.args = {
  sx: {
    color: '$indigo500',
  },
  marginBottom: '$md',
};
