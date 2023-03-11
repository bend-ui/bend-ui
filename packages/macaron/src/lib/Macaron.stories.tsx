import { Macaron } from './Macaron';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

const Story: ComponentMeta<typeof Macaron> = {
  component: Macaron,
  title: 'Macaron',
};
export default Story;

const Template: ComponentStory<typeof Macaron> = (args) => (
  <Macaron {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
