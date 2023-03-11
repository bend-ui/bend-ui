import { Button } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
