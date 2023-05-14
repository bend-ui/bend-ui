import React from 'react';
import { Dropdown } from '.';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Dropdown',
} as ComponentMeta<typeof Dropdown>;

export const Base: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);
