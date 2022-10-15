import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './Box';

export default {
  component: Box,
  title: 'Box',
  args: {
    children: 'Box',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  sx: {
    paddingY: 'xl',
    paddingX: 'sm',
    background: 'blue200',
  },
};
