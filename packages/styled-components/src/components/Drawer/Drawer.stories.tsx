import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from './Drawer';

export default {
  component: Drawer,
  title: 'Components/Drawer',
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
  <Drawer {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores adipisci
    quo temporibus libero at! Soluta quaerat voluptate minima impedit, doloribus
    nihil magni vitae iste quasi incidunt quas exercitationem vero non?
  </Drawer>
);

export const Primary = Template.bind({});
Primary.args = {};
