import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '.';

export default {} as ComponentMeta<typeof Dropdown>;

export const Base: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}></Dropdown>
);
