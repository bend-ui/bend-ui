import React from 'react';
import { Drawer } from './Drawer';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Drawer,
  title: 'Components/Drawer',
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => (
  <Drawer {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores adipisci
    quo temporibus libero at! Soluta quaerat voluptate minima impedit, doloribus
    nihil magni vitae iste quasi incidunt quas exercitationem vero non?
  </Drawer>
);

export const Primary = {
  render: Template,
  args: {},
};
