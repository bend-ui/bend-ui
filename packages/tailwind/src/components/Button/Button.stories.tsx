import { TbRefresh } from 'react-icons/tb';
import { Button } from './Button';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <TbRefresh />,
};

export const WithIconEnd = Template.bind({});
WithIconEnd.args = {
  iconEnd: <TbRefresh />,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  icon: <TbRefresh />,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  loadingLabel: 'Processing...',
};

export const AsLink = Template.bind({});
AsLink.args = {
  as: 'a',
  href: '/',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'bg-yellow-500 hover:bg-yellow-700',
};

export const WithClassNames = Template.bind({});
WithClassNames.args = {
  classNames: {
    root: 'bg-yellow-500 hover:bg-yellow-700',
  },
};

export const Variants = Template.bind({});
Variants.parameters = {
  variants: {
    enable: true,
  },
};
